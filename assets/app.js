/* ===========================================================
   Heritage+ Commercial Quoting Guide — app shell
   Static hash-router + renderer + client-side search.
   No build step — designed to be served as-is from GitHub Pages.
   =========================================================== */
(function(){
  "use strict";

  var DATA = window.WIKI_CONTENT;
  var flatOrder = [];      // ordered list of page ids, in nav order
  var pageMeta = {};       // id -> {group, groupIndex, title}
  var lunrIndex = null;
  var lunrDocs = {};        // id -> {title, crumb, text}

  // ---------- Build nav ----------
  function buildNav(){
    var tree = document.getElementById('navTree');
    tree.innerHTML = '';
    DATA.nav.forEach(function(group){
      var g = document.createElement('div');
      g.className = 'nav-group';
      var label = document.createElement('span');
      label.className = 'nav-group-label';
      label.textContent = group.group;
      g.appendChild(label);
      group.items.forEach(function(item){
        var a = document.createElement('a');
        a.className = 'nav-link';
        a.href = '#/' + item.id;
        a.dataset.id = item.id;
        if(item.num){
          var num = document.createElement('span');
          num.className = 'nl-num';
          num.textContent = item.num;
          a.appendChild(num);
        }
        var t = document.createElement('span');
        t.textContent = item.title;
        a.appendChild(t);
        g.appendChild(a);

        flatOrder.push(item.id);
        pageMeta[item.id] = {group: group.group, title: item.title};
      });
      tree.appendChild(g);
    });
  }

  // ---------- Markdown render helpers ----------
  function renderMarkdown(md){
    marked.setOptions({ gfm:true, breaks:false, headerIds:false, mangle:false });
    var html = marked.parse(md || '');
    return DOMPurify.sanitize(html, {ADD_ATTR:['target']});
  }

  function postProcessArticle(container){
    // wrap tables for horizontal scroll
    container.querySelectorAll('table').forEach(function(tbl){
      var wrap = document.createElement('div');
      wrap.className = 'table-wrap';
      tbl.parentNode.insertBefore(wrap, tbl);
      wrap.appendChild(tbl);
    });
    // open external links in new tab
    container.querySelectorAll('a[href^="http"]').forEach(function(a){
      a.target = '_blank'; a.rel = 'noopener';
    });
    // assign ids to headings for TOC / deep-link anchors
    var used = {};
    container.querySelectorAll('h2, h3').forEach(function(h){
      var base = h.textContent.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
      var id = base; var n = 2;
      while(used[id]){ id = base + '-' + n; n++; }
      used[id] = true;
      h.id = id;
    });
  }

  function buildTOC(container){
    var list = document.getElementById('tocList');
    list.innerHTML = '';
    var heads = container.querySelectorAll('h2, h3');
    if(!heads.length){ document.getElementById('tocPane').style.visibility = 'hidden'; return; }
    document.getElementById('tocPane').style.visibility = 'visible';
    heads.forEach(function(h){
      var li = document.createElement('li');
      if(h.tagName === 'H3') li.className = 'toc-h3';
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      a.addEventListener('click', function(e){
        e.preventDefault();
        history.replaceState(null, '', '#/' + currentPageId() + '#' + h.id);
        h.scrollIntoView({behavior:'smooth', block:'start'});
      });
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function currentPageId(){
    var hash = location.hash.replace(/^#\/?/, '');
    var id = hash.split('#')[0];
    return id || 'home';
  }

  function renderBreadcrumbs(id){
    var el = document.getElementById('breadcrumbs');
    var meta = pageMeta[id];
    if(!meta){ el.innerHTML=''; return; }
    el.innerHTML =
      '<a href="#/home">Guide</a>' +
      '<span class="sep">/</span>' +
      '<span>' + meta.group + '</span>' +
      '<span class="sep">/</span>' +
      '<span>' + meta.title + '</span>';
  }

  function renderPageNav(id){
    var el = document.getElementById('pageNav');
    var idx = flatOrder.indexOf(id);
    var prev = idx > 0 ? flatOrder[idx-1] : null;
    var next = idx >= 0 && idx < flatOrder.length-1 ? flatOrder[idx+1] : null;
    el.innerHTML = '';
    if(prev){
      var a1 = document.createElement('a');
      a1.href = '#/' + prev; a1.className = 'pn-prev';
      a1.innerHTML = '<span class="pn-dir">&larr; Previous</span>' + DATA.pages[prev].title;
      el.appendChild(a1);
    } else {
      var s = document.createElement('div'); s.className='page-nav-spacer'; el.appendChild(s);
    }
    if(next){
      var a2 = document.createElement('a');
      a2.href = '#/' + next; a2.className = 'pn-next';
      a2.innerHTML = '<span class="pn-dir">Next &rarr;</span>' + DATA.pages[next].title;
      el.appendChild(a2);
    }
  }

  function setActiveNav(id){
    document.querySelectorAll('.nav-link').forEach(function(a){
      a.classList.toggle('active', a.dataset.id === id);
    });
  }

  // ---------- Render a page ----------
  function renderPage(id, anchor){
    var page = DATA.pages[id];
    var article = document.getElementById('article');
    if(!page){
      article.innerHTML = '<h1>Page not found</h1><p>That section doesn\'t exist. Use the sidebar or search to find what you need.</p>';
      document.getElementById('tocList').innerHTML = '';
      document.getElementById('tocPane').style.visibility = 'hidden';
      document.getElementById('pageNav').innerHTML = '';
      renderBreadcrumbs(null);
      document.title = 'Not found — Heritage+ Commercial Quoting Guide';
      return;
    }
    var html = '';
    if(page.kicker) html += '<span class="kicker">' + page.kicker + '</span>';
    html += '<h1>' + page.title + '</h1>';
    if(page.dek) html += '<p class="dek">' + page.dek + '</p>';
    html += renderMarkdown(page.body);
    article.innerHTML = html;
    postProcessArticle(article);
    buildTOC(article);
    renderBreadcrumbs(id);
    renderPageNav(id);
    setActiveNav(id);
    document.title = page.title + ' — Heritage+ Commercial Quoting Guide';

    if(anchor){
      var target = document.getElementById(anchor);
      if(target) setTimeout(function(){ target.scrollIntoView({behavior:'instant', block:'start'}); }, 0);
    } else {
      window.scrollTo(0,0);
    }
    closeMobileNav();
  }

  function route(){
    var hash = location.hash.replace(/^#\/?/, '');
    var parts = hash.split('#');
    var id = parts[0] || 'home';
    var anchor = parts[1] || null;
    renderPage(id, anchor);
  }

  // ---------- Search ----------
  function buildSearchIndex(){
    Object.keys(DATA.pages).forEach(function(id){
      var page = DATA.pages[id];
      var meta = pageMeta[id] || {};
      var plain = (page.title + ' ' + (page.dek||'') + ' ' + (page.body||''))
        .replace(/[#*`>_\-|\[\]\(\)]/g,' ')
        .replace(/\s+/g,' ');
      lunrDocs[id] = { title: page.title, crumb: meta.group || '', text: plain };
    });
    lunrIndex = lunr(function(){
      this.ref('id');
      this.field('title', {boost:10});
      this.field('text');
      var self = this;
      Object.keys(lunrDocs).forEach(function(id){
        self.add({ id:id, title: lunrDocs[id].title, text: lunrDocs[id].text });
      });
    });
  }

  function snippetFor(id, terms){
    var text = lunrDocs[id].text;
    var lower = text.toLowerCase();
    var pos = -1;
    for(var i=0;i<terms.length;i++){
      pos = lower.indexOf(terms[i].toLowerCase());
      if(pos !== -1) break;
    }
    if(pos === -1) return text.slice(0,120) + '…';
    var start = Math.max(0, pos - 50);
    var snippet = (start>0?'…':'') + text.slice(start, start+150) + '…';
    terms.forEach(function(t){
      if(!t) return;
      var re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'ig');
      snippet = snippet.replace(re, '<mark>$1</mark>');
    });
    return snippet;
  }

  function runSearch(q){
    var box = document.getElementById('searchResults');
    if(!q || !q.trim()){ box.hidden = true; box.innerHTML=''; return; }
    var results;
    try{
      results = lunrIndex.search(q.trim().split(/\s+/).map(function(t){ return t + (t.length>2 ? '*':''); }).join(' '));
    }catch(e){
      results = lunrIndex.search(lunr.tokenizer(q.trim()).map(String).join(' '));
    }
    box.innerHTML = '';
    if(!results.length){
      box.innerHTML = '<div class="sr-empty">No matches for “' + q + '”. Try a different term.</div>';
      box.hidden = false;
      return;
    }
    var terms = q.trim().split(/\s+/);
    results.slice(0,10).forEach(function(r, i){
      var doc = lunrDocs[r.ref];
      var a = document.createElement('a');
      a.className = 'sr-item' + (i===0 ? ' active' : '');
      a.href = '#/' + r.ref;
      a.innerHTML =
        '<span class="sr-title">' + doc.title + '</span>' +
        '<span class="sr-crumb">' + doc.crumb + '</span>' +
        '<span class="sr-snippet">' + snippetFor(r.ref, terms) + '</span>';
      a.addEventListener('click', function(){ box.hidden = true; document.getElementById('searchInput').value=''; });
      box.appendChild(a);
    });
    box.hidden = false;
  }

  // ---------- Mobile nav ----------
  function openMobileNav(){
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarScrim').classList.add('open');
    document.getElementById('navToggle').setAttribute('aria-expanded','true');
  }
  function closeMobileNav(){
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarScrim').classList.remove('open');
    document.getElementById('navToggle').setAttribute('aria-expanded','false');
  }

  // ---------- Init ----------
  function init(){
    buildNav();
    buildSearchIndex();
    route();
    window.addEventListener('hashchange', route);

    var input = document.getElementById('searchInput');
    input.addEventListener('input', function(){ runSearch(input.value); });
    input.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){ input.value=''; runSearch(''); input.blur(); }
    });
    document.addEventListener('click', function(e){
      if(!e.target.closest('.search-wrap')){
        document.getElementById('searchResults').hidden = true;
      }
    });
    document.addEventListener('keydown', function(e){
      if(e.key === '/' && document.activeElement !== input){
        e.preventDefault(); input.focus();
      }
    });

    document.getElementById('navToggle').addEventListener('click', function(){
      var open = document.getElementById('sidebar').classList.contains('open');
      if(open) closeMobileNav(); else openMobileNav();
    });
    document.getElementById('sidebarScrim').addEventListener('click', closeMobileNav);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
