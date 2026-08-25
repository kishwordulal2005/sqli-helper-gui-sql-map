const LUCIDE_PATHS = {
    book: '<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    filetext: '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    crosshair: '<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    play: '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',
    save: '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>',
    zap: '<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',
    checkcircle: '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
    settings: '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
    eyeoff: '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>'
};
function ic(name, size = 16) {
    return `<svg class="lucide" width="${size}" height="${size}" viewBox="0 0 24 24">${LUCIDE_PATHS[name] || ''}</svg>`;
}

class SQLMapGenerator {
    constructor() {
        this.config = {};

        this.paramMapping = {
            '-u': 'url',
            '-d': 'directDb',
            '-g': 'googleDork',
            '-m': 'targetsFile',
            '-l': 'burpFile',
            '--scope': 'burpFileScope',
            '--crawl': 'crawlDepth',
            '--crawl-exclude': 'crawlExclude',
            '--forms': 'crawlForms',

            '--timeout': 'timeout',
            '--delay': 'delay',
            '--threads': 'threads',
            '--force-ssl': 'forceSsl',
            '--keep-alive': 'keepAlive',
            '--null-connection': 'nullConnection',
            '--http2': 'http2',

            '--proxy': 'proxy',
            '--proxy-cred': 'proxyCred',
            '--proxy-file': 'proxyFile',
            '--proxy-freq': 'proxyFreq',
            '--ignore-proxy': 'proxyIgnore',
            '--tor': 'tor',
            '--check-tor': 'checkTor',
            '--tor-port': 'torPort',
            '--tor-type': 'torType',

            '--method': 'method',
            '--param-del': 'paramDel',
            '-r': 'requestFile',
            '--eval': 'eval',
            '--data': 'data',
            
            '--host': 'host',
            '-A': 'userAgent',
            '--random-agent': 'userAgent',
            '--mobile': 'mobileUserAgent',
            '--referer': 'referer',
            '--headers': 'headers',

            '--cookie': 'cookie',
            '--cookie-del': 'cookieDel',
            '--live-cookies': 'cookieLive',
            '--load-cookies': 'cookieLoad',
            '--drop-set-cookie': 'cookieDrop',
            '--auth-type': 'authType',
            '--auth-cred': 'authCred',
            '--auth-file': 'authFile',

            '--csrf-url': 'csrfUrl',
            '--csrf-method': 'csrfMethod',
            '--csrf-data': 'csrfData',
            '--csrf-token': 'csrfToken',
            '--csrf-retries': 'csrfRetries',

            '--safe-url': 'safeUrl',
            '--safe-post': 'safePost',
            '--safe-req': 'safeReq',
            '--safe-freq': 'safeFreq',

            
            '-p': 'paramTest',
            '--skip': 'paramSkip',
            '--param-exclude': 'paramExclude',
            '--param-filter': 'paramFilter',
            '--prefix': 'prefix',
            '--suffix': 'suffix',
            '--randomize': 'randomize',
            
            '--titles': 'titles',
            '--text-only': 'textOnly',
            '--ignore-redirects': 'ignoreRedirects',
            '--ignore-timeouts': 'ignoreTimeouts',
            '--string': 'string',
            '--regexp': 'regexp',
            '--not-string': 'notString',
            '--code': 'code',
            '--abort-code': 'abortCode',
            '--ignore-code': 'ignoreCode',
            '--retries': 'retries',
            '--retry-on': 'retryOn',

            '--level': 'level',
            '--risk': 'risk',
            '--dbms': 'dbms',
            '--os': 'os',
            '--second-url': 'secondUrl',
            '--second-req': 'secondReq',
            '--technique': 'technique',
            '--invalid-bignum': 'invalidBignum',
            '--invalid-logical': 'invalidLogical', 
            '--invalid-string': 'invalidString',
            '--no-cast': 'noCast',
            '--no-escape': 'noEscape',
            '--predict-output':'predictOutput',
            '--skip-urlencode':'skipUrlencode',
            '--chunked':'chunked',
            '--hpp':'hpp',

            '--all': 'all',
            '--banner': 'banner',
            '--columns': 'columns',
            '--comments': 'comments',
            '--count': 'count',
            '--current-user': 'currentUser',
            '--current-db': 'currentDb',
            '--dbs': 'dbs',
            '--dump': 'dump',
            '--dump-all': 'dumpAll',
            '--exclude-sysdbs': 'excludeSysdbs',
            '--hostname': 'hostname',
            '--is-dba': 'isDba',
            '--passwords': 'passwords',
            '--privileges': 'privileges',
            '--roles': 'roles',
            '--schema': 'schema',
            '--search': 'search',
            '--statements': 'statements',
            '--tables': 'tables',
            '--users': 'users',
            
            '-D': 'database',
            '-T': 'table',
            '-C': 'column',
            '-X': 'exclude',
            '-U': 'user',
            '--pivot-column': 'pivotColumn',
            '--where': 'where',
            '--start': 'start',
            '--stop': 'stop',
            '--first': 'first',
            '--last': 'last',
            '--sql-query': 'sqlQuery',
            '--sql-file': 'sqlFile',

            '--os-shell': 'osShell',
            '--os-cmd': 'osCmd',
            '--file-read': 'fileRead',
            '--file-write': 'fileWrite',
            '--file-dest': 'fileDest',
            '--priv-esc': 'privEsc',
            '--dump-file': 'dumpFile',
            '--dump-format': 'dumpFormat',

            '--tamper': 'tamper',

            '-v': 'verbose',
            '-t': 'trafficFile',
            '-c': 'configFile',
            '--batch': 'batch',
            '--parse-errors': 'parseErrors'
        };

        this.tamperScriptList = [
            "0eunion",
            "apostrophemask",
            "apostrophenullencode",
            "appendnullbyte",
            "base64encode",
            "between",
            "binary",
            "blindbinary",
            "bluecoat",
            "castprefix",
            "chardoubleencode",
            "charencode",
            "charunicodeencode",
            "charunicodeescape",
            "commalesslimit",
            "commalessmid",
            "commentbeforeparentheses",
            "concat2concatws",
            "decentities",
            "dollarquote",
            "dunion",
            "equaltolike",
            "equaltorlike",
            "escapequotes",
            "greatest",
            "halfversionedmorekeywords",
            "hex2char",
            "hexentities",
            "htmlencode",
            "if2case",
            "ifnull2casewhenisnull",
            "ifnull2ifisnull",
            "informationschemacomment",
            "infoschema2innodb",
            "least",
            "lowercase",
            "luanginx",
            "luanginxmore",
            "mid2leftright",
            "misunion",
            "modsecurityversioned",
            "modsecurityzeroversioned",
            "mssqlnosemicolon",
            "multiplespaces",
            "odbcbrace",
            "oraclequote",
            "ord2ascii",
            "overlongutf8",
            "overlongutf8more",
            "percentage",
            "plus2concat",
            "plus2fnconcat",
            "quote2ltat",
            "randomcase",
            "randomcomments",
            "schemasplit",
            "scientific",
            "sign",
            "sleep2getlock",
            "sleep2hex",
            "sp_password",
            "space2comment",
            "space2dash",
            "space2hash",
            "space2morecomment",
            "space2morehash",
            "space2mssqlblank",
            "space2mssqlhash",
            "space2mysqlblank",
            "space2mysqldash",
            "space2plus",
            "space2randomblank",
            "substring2leftright",
            "symboliclogical",
            "unionalltounion",
            "uniontable",
            "unionvalues",
            "unionvaluesrow",
            "unmagicquotes",
            "uppercase",
            "varnish",
            "versionedkeywords",
            "versionedmorekeywords",
            "xforwardedfor"
        ];
        
        this.init();
    }

    init() {
        this.wizardOrder = ['guide','target','request','connection','injection','tampering','exploitation','sqlmap','config'];
        this.wizardNames = {guide:'Guide', target:'Website', request:'Form / Login', connection:'Stealth', injection:'Attack', tampering:'Bypass WAF', exploitation:'Get Data', sqlmap:'Run', config:'Save'};
        this.essentialFields = {
            target: ['url','crawlDepth','crawlForms'],
            request: ['method','customHttpMethod','data','cookie'],
            connection: ['timeout','delay','threads','proxy'],
            injection: ['paramTest','level','risk','techB','techE','techU','techS','techT','techQ','prefix','suffix','dbms'],
            exploitation: ['all','banner','currentUser','currentDb','dbs','tables','columns','dump','database','table','column','osShell','osCmd','fileRead','fileWrite','fileDest','privEsc','dumpFile','dumpFormat'],
            sqlmap: ['verbose','batch']
        };
        this.stepIntros = {
            target: {icon:'target', title:'Which website do you want to test?', text:'Paste the page link that has a parameter in it — that parameter is what gets tested.', example:'https://shop.com/product.php?id=5'},
            request: {icon:'filetext', title:'Does the page send data another way?', text:'Only needed for forms, logins or APIs. Testing a simple ?id= link? Skip this step.', example:'POST data looks like: username=admin&password=123'},
            connection: {icon:'globe', title:'Stay quiet and undetected (optional)', text:'Slow down requests or hide behind a proxy/Tor so the site does not block you. Defaults are fine — skip if unsure.', example:'--delay=1 waits 1 second between requests'},
            injection: {icon:'crosshair', title:'Tell sqlmap what to attack', text:'Pick the parameter to test (usually id), how deep to search, and which techniques to allow. Defaults work for most sites.', example:'-p id  ·  Level 1 = fast scan, Level 3 also tests headers'},
            tampering: {icon:'shield', title:'Is a firewall (WAF) blocking you?', text:'Tamper scripts disguise the payloads so filters miss them. Not needed unless you get blocked.', example:'Start with: space2comment + randomcase'},
            exploitation: {icon:'database', title:'What data do you want out?', text:'Once injection works, choose what to extract. Go in order: databases → tables → dump data.', example:'--dbs lists databases → -D shop --tables → --dump'},
            sqlmap: {icon:'play', title:'Final touches, then run it', text:'Choose output detail and let sqlmap run without questions. Copy the black command at the top into your terminal.', example:'python sqlmap.py -u "..." --batch'},
            config: {icon:'save', title:'Save or share your setup', text:'Download your choices as a file, or copy a link that reopens this exact setup later.', example:null}
        };
        document.body.classList.add('simple-mode');
        this.setupEventListeners();
        this.setupTabs();
        this.setupSliders();
        this.setupWizardNav();
        this.setupStepIntros();
        this.setupSimpleModeToggle();
        this.handleHashtag();
        this.updateCommand();
        this.updateWizardProgress(this.getActiveTab() || 'guide');
    }

    setupStepIntros() {
        this.wizardOrder.forEach(tabId => {
            const intro = this.stepIntros[tabId];
            if (!intro) return;
            const body = document.querySelector(`#${tabId} .card__body`);
            if (!body || body.querySelector('.step-intro')) return;
            const div = document.createElement('div');
            div.className = 'step-intro';
            let html = `<div class="step-intro-icon">${ic(intro.icon, 24)}</div><div><div class="step-intro-title">${intro.title}</div><div class="step-intro-text">${intro.text}</div>`;
            if (intro.example) html += `<code class="step-intro-example">${intro.example}</code>`;
            html += '</div>';
            // Quick action for the Website step
            if (tabId === 'target') {
                html += `<button class="btn btn--secondary btn--sm step-quick-btn" id="loadExampleBtn">${ic('zap')} Load practice site</button>`;
            }
            if (tabId === 'injection') {
                html += `<button class="btn btn--secondary btn--sm step-quick-btn" id="quickDefaultsBtn">${ic('checkcircle')} Use recommended defaults</button>`;
            }
            div.innerHTML = html;
            body.insertBefore(div, body.firstChild);
        });

        const ex = document.getElementById('loadExampleBtn');
        if (ex) ex.addEventListener('click', () => {
            const urlInput = document.getElementById('url');
            urlInput.value = 'https://testphp.vulnweb.com/listproducts.php?cat=1';
            urlInput.dispatchEvent(new Event('input', {bubbles:true}));
            this.showMessage('Practice site loaded — it is built for legal testing. Command updated ↑', 'success');
        });

        const qd = document.getElementById('quickDefaultsBtn');
        if (qd) qd.addEventListener('click', () => {
            const p = document.getElementById('paramTest'); if (p && !p.value) p.value = 'id';
            ['techB','techE','techU','techS','techT','techQ'].forEach(id => { const el=document.getElementById(id); if (el) el.checked=true; });
            document.querySelectorAll('#injection input, #injection select').forEach(el => el.dispatchEvent(new Event('change', {bubbles:true})));
            this.showMessage('Recommended attack settings applied', 'success');
        });
    }

    setupSimpleModeToggle() {
        // Tag advanced vs essential fields per step
        document.querySelectorAll('.tab-content .form-grid').forEach(grid => {
            const tabId = grid.closest('.tab-content').id;
            const ess = this.essentialFields[tabId];
            if (!ess) return; // guide/tampering/config show everything
            let currentHeader = null;
            let sectionNodes = [];
            let sectionHasEss = false;
            const finalize = () => {
                sectionNodes.forEach(node => {
                    if (sectionHasEss) node.classList.add('ess-section');
                    else node.classList.add('adv-hide-section');
                });
                if (currentHeader && !sectionHasEss) currentHeader.classList.add('adv-hide-section');
                sectionNodes = [];
                sectionHasEss = false;
            };
            Array.from(grid.children).forEach(node => {
                if (node.tagName === 'H3') {
                    finalize();
                    currentHeader = node;
                    return;
                }
                const ids = Array.from(node.querySelectorAll('input,select,textarea')).map(el => el.id);
                const isEss = ids.some(id => ess.includes(id));
                if (isEss) sectionHasEss = true;
                else node.classList.add('adv-field');
                sectionNodes.push(node);
            });
            finalize();
        });

        // Toggle button inside wizard header
        const header = document.querySelector('.wizard-header');
        if (header && !header.querySelector('.mode-toggle')) {
            const btn = document.createElement('button');
            btn.className = 'btn btn--secondary btn--sm mode-toggle';
            btn.textContent = ''; btn.insertAdjacentHTML('afterbegin', ic('settings') + ' Show advanced options');
            btn.addEventListener('click', () => {
                document.body.classList.toggle('simple-mode');
                const simple = document.body.classList.contains('simple-mode');
                btn.innerHTML = ic(simple ? 'settings' : 'eyeoff') + (simple ? ' Show advanced options' : ' Hide advanced options');
                this.showMessage(simple ? 'Simple mode: only the important fields shown' : 'Advanced mode: all options visible', 'info');
            });
            header.appendChild(btn);
        }
    }

    getActiveTab() {
        const active = document.querySelector('.tab-content.active');
        return active ? active.id : null;
    }

    updateWizardProgress(tabId) {
        const idx = this.wizardOrder.indexOf(tabId);
        const total = this.wizardOrder.length -1;
        const pct = idx >=0 ? Math.round((idx/total)*100) : 0;
        const fill = document.getElementById('wizardProgress');
        if (fill) fill.style.width = pct + '%';
        const num = document.getElementById('wizardStepNum');
        const name = document.getElementById('wizardStepName');
        if (num) num.textContent = idx>=0 ? idx : '-';
        if (name) name.textContent = this.wizardNames[tabId] || tabId;
        document.querySelectorAll('.flow-node').forEach(n=> {
            n.classList.remove('active','done');
            const gid = n.dataset.goto;
            const gIdx = this.wizardOrder.indexOf(gid);
            if (gid === tabId) n.classList.add('active');
            else if (gIdx >=0 && gIdx < idx) n.classList.add('done');
        });
    }

    goToTab(tabId) {
        document.querySelectorAll('.tab-btn').forEach(b=> b.classList.toggle('active', b.dataset.tab===tabId));
        document.querySelectorAll('.tab-content').forEach(c=> c.classList.toggle('active', c.id===tabId));
        this.updateWizardProgress(tabId);
        window.scrollTo({top: document.querySelector('.options-section').offsetTop - 20, behavior:'smooth'});
    }

    setupWizardNav() {
        // Inject Prev/Next buttons into each tab
        this.wizardOrder.forEach((tabId, i)=> {
            const content = document.getElementById(tabId);
            if (!content) return;
            if (content.querySelector('.wizard-nav')) return;
            const card = content.querySelector('.card');
            if (!card) return;
            const nav = document.createElement('div');
            nav.className = 'wizard-nav';
            const prevId = this.wizardOrder[i-1];
            const nextId = this.wizardOrder[i+1];
            let html = '';
            if (prevId) html += `<button class="btn btn--secondary wizard-prev" data-goto="${prevId}">← Prev: ${this.wizardNames[prevId]}</button>`;
            else html += `<span></span>`;
            if (nextId) html += `<button class="btn btn--primary wizard-next" data-goto="${nextId}">Next: ${this.wizardNames[nextId]} →</button>`;
            else html += `<button class="btn btn--primary" onclick="document.getElementById('copyBtn').scrollIntoView({behavior:'smooth'})">${ic('check',15)} Copy Command</button>`;
            nav.innerHTML = html;
            card.appendChild(nav);
            nav.querySelectorAll('button[data-goto]').forEach(b=> b.addEventListener('click', ()=> this.goToTab(b.dataset.goto)));
        });
        // Flowchart mini clicks
        document.querySelectorAll('.flow-node[data-goto]').forEach(n=> n.addEventListener('click', ()=> this.goToTab(n.dataset.goto)));
        // Guide code copy on click
        document.addEventListener('click', (e)=>{
            const code = e.target.closest('.guide-code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(()=> this.showMessage('Snippet copied: ' + code.textContent.slice(0,40)+'...', 'success')).catch(()=>{});
            }
        });
    }

    setStandardConfigItem(config, confkey) {
        var id = this.paramMapping[confkey];
        var elem = document.getElementById(id);
        var value = null;
        try {

        
            if (elem.type === 'checkbox') {
                value = elem.checked;
            } 
            else if (elem.type === 'text' || elem.type === 'number' || elem.type === 'url' || elem.type === 'select-one') {
                value = elem.value.trim();
            }        
            else if (elem.type === 'textarea') {
                value = elem.value.trim().replaceAll("\n", "\\\n");
            }

            if (value) {
                config[confkey] = value;
            }

        } catch (e) {
            console.log(confkey, e);
        }
    }

    getCurrentConfig() {
        const config = {};
        
        // # TARGET TAB
        this.setStandardConfigItem(config, '-u');
        this.setStandardConfigItem(config, '-d');
        this.setStandardConfigItem(config, '-g');
        this.setStandardConfigItem(config, '-m');
        this.setStandardConfigItem(config, '-l');
        
        const burpFileScope = document.getElementById('burpFileScope').value.trim();
        const burpFileVal = document.getElementById('burpFile').value.trim();
        if (burpFileScope) config['--scope'] = burpFileScope;
        if (burpFileScope && !burpFileVal) document.getElementById('burpFile').value = "burp.txt";

        const crawlDepthEl = document.getElementById('crawlDepth');
        if (crawlDepthEl) {
            const crawlDepth = crawlDepthEl.value.trim();
            if (crawlDepth && Number(crawlDepth) >= 1) config['--crawl'] = crawlDepth;
        }
        this.setStandardConfigItem(config, '--crawl-exclude');
        this.setStandardConfigItem(config, '--forms');
        
        // # CONNECECTION TAB
        // ## Connection Control
        const timeout = document.getElementById('timeout').value;
        if (timeout && timeout != 30) config['--timeout'] = timeout;

        const delay = document.getElementById('delay').value;
        if (delay && delay > 0) config['--delay'] = delay;

        const threads = document.getElementById('threads').value;
        if (threads && threads > 1) config['--threads'] = threads;

        this.setStandardConfigItem(config, '--force-ssl');
        this.setStandardConfigItem(config, '--keep-alive');
        this.setStandardConfigItem(config, '--null-connection');
        this.setStandardConfigItem(config, '--http2');

        // ## Proxy Options
        this.setStandardConfigItem(config, '--proxy');
        this.setStandardConfigItem(config, '--proxy-cred');
        this.setStandardConfigItem(config, '--proxy-file');
        
        const proxyFreq = document.getElementById('proxyFreq').value.trim();
        if (proxyFreq && proxyFreq >= 1) config['--proxy-freq'] = proxyFreq;
        
        this.setStandardConfigItem(config, '--ignore-proxy');
        this.setStandardConfigItem(config, '--tor');
        this.setStandardConfigItem(config, '--check-tor');  
        this.setStandardConfigItem(config, '--tor-port');   

        const torType = document.getElementById('torType').value.trim();
        if (torType && torType !== "SOCKS5") config['--tor-type'] = torType;        

        // # REQUEST TAB
        // ## Request Data
        const method = document.getElementById('method').value;
        if (method && method !== 'custom') {
            config['--method'] = method;
        } else if (method === 'custom') {
            const customHttpMethod = document.getElementById('customHttpMethod').value.trim();
            if (customHttpMethod) config['--method'] = customHttpMethod;
        }

        const paramDel = document.getElementById('paramDel').value.trim();
        if (paramDel && paramDel !== "&") config['--param-del'] = paramDel;

        this.setStandardConfigItem(config, '-r');   
        this.setStandardConfigItem(config, '--eval');   
        this.setStandardConfigItem(config, '--data');   

        // ## Request Headers
        this.setStandardConfigItem(config, '--host');   
        
        const userAgent = document.getElementById('userAgent').value;
        if (userAgent && userAgent === 'random') {
            config['--random-agent'] = true;
        }
        else if (userAgent && userAgent === 'mobile') {
            config['--mobile'] = true;
        }
        else if (userAgent && userAgent === 'custom') {
            const customUserAgent = document.getElementById('customUserAgent').value;
            if (customUserAgent) config['-A'] = customUserAgent;
        }
        else if (userAgent) {
            config['-A'] = userAgent;
        }

        this.setStandardConfigItem(config, '--referer');  
        this.setStandardConfigItem(config, '--headers');  

        // ## Authentication
        this.setStandardConfigItem(config, '--cookie'); 
        this.setStandardConfigItem(config, '--cookie-del'); 
        this.setStandardConfigItem(config, '--live-cookies'); 
        this.setStandardConfigItem(config, '--load-cookies'); 

        this.setStandardConfigItem(config, '--drop-set-cookie');   
        
        const authType = document.getElementById('authType').value;
        const authCred = document.getElementById('authCred').value.trim();
        if (authType && authCred) {
            config['--auth-type'] = authType;
            config['--auth-cred'] = authCred;
        }
        
        this.setStandardConfigItem(config, '--auth-file'); 

        // ## CSRF Tokens Control
        this.setStandardConfigItem(config, '--csrf-url'); 
        
        const csrfMethod = document.getElementById('csrfMethod').value;
        if (csrfMethod && csrfMethod !== 'custom') {
            config['--csrf-method'] = csrfMethod;
        } else if (csrfMethod === 'custom') {
            const customCsrfMethod = document.getElementById('customCsrfMethod').value;
            if (customCsrfMethod) config['--csrf-method'] = customCsrfMethod;
        }
        
        this.setStandardConfigItem(config, '--csrf-data'); 
        this.setStandardConfigItem(config, '--csrf-token'); 
        
        const csrfRetries = document.getElementById('csrfRetries').value.trim();
        if (csrfRetries && csrfRetries > 0) config['--csrf-retries'] = csrfRetries;

        // ## Safe Requests
        this.setStandardConfigItem(config, '--safe-url'); 
        this.setStandardConfigItem(config, '--safe-post'); 
        this.setStandardConfigItem(config, '--safe-req'); 
        this.setStandardConfigItem(config, '--safe-freq'); 
     
        // # INJECTION TAB
        // ## Parameters
        this.setStandardConfigItem(config, '-p'); 
        this.setStandardConfigItem(config, '--skip'); 
        this.setStandardConfigItem(config, '--param-exclude'); 
        this.setStandardConfigItem(config, '--param-filter'); 
        this.setStandardConfigItem(config, '--prefix'); 
        this.setStandardConfigItem(config, '--suffix'); 
        this.setStandardConfigItem(config, '--randomize');  

        // ## Detection
        this.setStandardConfigItem(config, '--text-only');  
        this.setStandardConfigItem(config, '--titles');  
        this.setStandardConfigItem(config, '--ignore-redirects');  
        this.setStandardConfigItem(config, '--ignore-timeouts');  
        this.setStandardConfigItem(config, '--string');
        this.setStandardConfigItem(config, '--regexp');    
        this.setStandardConfigItem(config, '--not-string');
       
        const code = document.getElementById('code').value.trim();
        if (code && code >= 100 && code <= 599) config['--code'] = code;
        
        this.setStandardConfigItem(config, '--abort-code');  
        this.setStandardConfigItem(config, '--ignore-code');  

        const retries = document.getElementById('retries').value.trim();
        if (retries !== '' && Number(retries) >= 0) config['--retries'] = retries;

        this.setStandardConfigItem(config, '--retry-on');  
        
        // ## Attack Optimalization
        const level = document.getElementById('level').value;
        if (level > 1) config['--level'] = level;
        
        const risk = document.getElementById('risk').value;
        if (risk > 1) config['--risk'] = risk;

        this.setStandardConfigItem(config, '--dbms'); 
        this.setStandardConfigItem(config, '--os'); 
        this.setStandardConfigItem(config, '--second-url');
        this.setStandardConfigItem(config, '--second-req');
        
        const techniques = [];
        if (document.getElementById('techB').checked) techniques.push('B');
        if (document.getElementById('techE').checked) techniques.push('E');
        if (document.getElementById('techU').checked) techniques.push('U');
        if (document.getElementById('techS').checked) techniques.push('S');
        if (document.getElementById('techT').checked) techniques.push('T');
        if (document.getElementById('techQ').checked) techniques.push('Q');
        if (techniques.length > 0) config['--technique'] = techniques.join('');

        this.setStandardConfigItem(config, '--invalid-bignum');
        this.setStandardConfigItem(config, '--invalid-logical');
        this.setStandardConfigItem(config, '--invalid-string');
        this.setStandardConfigItem(config, '--no-cast');
        this.setStandardConfigItem(config, '--no-escape');
        this.setStandardConfigItem(config, '--predict-output');
        this.setStandardConfigItem(config, '--skip-urlencode');
        this.setStandardConfigItem(config, '--chunked');
        this.setStandardConfigItem(config, '--hpp');

        // # EXPLOITATION TAB
        // ## Enumeration and Data Exfiltraion
        this.setStandardConfigItem(config, '--all');
        this.setStandardConfigItem(config, '--banner');
        this.setStandardConfigItem(config, '--columns');
        this.setStandardConfigItem(config, '--comments');
        this.setStandardConfigItem(config, '--count');
        this.setStandardConfigItem(config, '--current-user');
        this.setStandardConfigItem(config, '--current-db');
        this.setStandardConfigItem(config, '--dbs');
        this.setStandardConfigItem(config, '--dump');
        this.setStandardConfigItem(config, '--dump-all');
        this.setStandardConfigItem(config, '--hostname');
        this.setStandardConfigItem(config, '--is-dba');
        this.setStandardConfigItem(config, '--exclude-sysdbs');
        this.setStandardConfigItem(config, '--passwords');
        this.setStandardConfigItem(config, '--privileges');
        this.setStandardConfigItem(config, '--roles');
        this.setStandardConfigItem(config, '--schema');
        this.setStandardConfigItem(config, '--search');
        this.setStandardConfigItem(config, '--statements');
        this.setStandardConfigItem(config, '--tables');
        this.setStandardConfigItem(config, '--users');

        // ## Other Exploitation Options
        this.setStandardConfigItem(config, '-D');
        this.setStandardConfigItem(config, '-T');
        this.setStandardConfigItem(config, '-C');
        this.setStandardConfigItem(config, '-X');
        this.setStandardConfigItem(config, '-U');
        this.setStandardConfigItem(config, '--pivot-column');
        this.setStandardConfigItem(config, '--where');
        this.setStandardConfigItem(config, '--start');
        this.setStandardConfigItem(config, '--stop');
        this.setStandardConfigItem(config, '--first');
        this.setStandardConfigItem(config, '--last');
        this.setStandardConfigItem(config, '--sql-query');
        this.setStandardConfigItem(config, '--sql-file');

        // Advanced takeover & file access — now visible even in simple mode
        this.setStandardConfigItem(config, '--os-shell');
        this.setStandardConfigItem(config, '--os-cmd');
        this.setStandardConfigItem(config, '--file-read');
        this.setStandardConfigItem(config, '--file-write');
        this.setStandardConfigItem(config, '--file-dest');
        this.setStandardConfigItem(config, '--priv-esc');
        this.setStandardConfigItem(config, '--dump-file');
        this.setStandardConfigItem(config, '--dump-format');

        // # TAMPERING TAB
        const tamperScripts = [];
        this.tamperScriptList.forEach(s => {
            if (document.getElementById('tamperscript-'+s).checked) tamperScripts.push(s);
        });
        const tamper = document.getElementById('tamper');
        tamper.value = tamperScripts.join(',');
        if (tamper.value.trim()) config['--tamper'] = tamper.value.trim();
        
        
        // SQLMAP TAB
        const verbose = document.getElementById('verbose').value;
        if (verbose != 1) config['-v'] = verbose;

        this.setStandardConfigItem(config, '-t');
        this.setStandardConfigItem(config, '-c');
        this.setStandardConfigItem(config, '--batch');
        this.setStandardConfigItem(config, '--parse-errors');
        
        return config;
    }

    setupEventListeners() {
        // Copy button
        document.getElementById('copyBtn').addEventListener('click', () => this.copyCommand());
        document.getElementById('copyUrlBtn').addEventListener('click', () => this.copyUrl());
        
        // Template buttons
        document.querySelectorAll('.template-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.loadTemplate(e.currentTarget.dataset.template));
        });
        
        // Configuration buttons
        document.getElementById('saveConfig').addEventListener('click', () => this.saveConfiguration());
        document.getElementById('loadConfig').addEventListener('click', () => this.loadConfiguration());
        document.getElementById('resetConfig').addEventListener('click', () => this.resetConfiguration());

        // Auto-detect params from URL
        const urlEl = document.getElementById('url');
        if (urlEl) {
            urlEl.addEventListener('input', () => this.autoDetectParams());
            urlEl.addEventListener('change', () => this.autoDetectParams());
        }
        
        // All form inputs
        document.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', () => this.updateCommand());
            input.addEventListener('change', () => this.updateCommand());
        });

        // HTTP method custom field toggle
        document.getElementById('method').addEventListener('change', (e) => {
            const customHttpGroup = document.getElementById('customHttpMethodGroup');
            if (e.target.value === 'custom') {
                customHttpGroup.style.display = 'block';
            } else {
                customHttpGroup.style.display = 'none';
            }
        });
        
        // User-Agent custom field toggle
        document.getElementById('userAgent').addEventListener('change', (e) => {
            const customUserAgentGroup = document.getElementById('customUserAgentGroup');
            if (e.target.value === 'custom') {
                customUserAgentGroup.style.display = 'block';
            } else {
                customUserAgentGroup.style.display = 'none';
            }
        });

        // CSRF method custom field toggle
        document.getElementById('csrfMethod').addEventListener('change', (e) => {
            const customCsrfMethodGroup = document.getElementById('customCsrfMethodGroup');
            if (e.target.value === 'custom') {
                customCsrfMethodGroup.style.display = 'block';
            } else {
                customCsrfMethodGroup.style.display = 'none';
            }
        });
    }

    autoDetectParams() {
        const urlVal = document.getElementById('url')?.value.trim();
        if (!urlVal) return;
        let params = [];
        try {
            let u = urlVal;
            if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
            const parsed = new URL(u);
            parsed.searchParams.forEach((_, k) => params.push(k));
        } catch(e) {
            const q = urlVal.split('?')[1];
            if (q) {
                q.split(/[&;]/).forEach(pair => {
                    const k = pair.split('=')[0]?.trim();
                    if (k && !k.includes('/') && !k.includes(' ')) {
                        try { params.push(decodeURIComponent(k)); } catch { params.push(k); }
                    }
                });
            }
        }
        params = [...new Set(params.filter(Boolean))];
        if (params.length === 0) {
            const hint = document.getElementById('paramAutoHint');
            if (hint) hint.textContent = '';
            return;
        }
        const pInput = document.getElementById('paramTest');
        if (!pInput) return;
        const current = pInput.value.trim();
        if (!current) {
            pInput.value = params.join(',');
            pInput.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.28)';
            setTimeout(() => pInput.style.boxShadow = '', 1200);
            this.showMessage(`Detected parameters from URL: ${params.join(', ')} \u2192 filled Testable Parameters (-p)`, 'info');
            this.updateCommand();
        } else {
            let hint = document.getElementById('paramAutoHint');
            if (!hint) {
                hint = document.createElement('div');
                hint.id = 'paramAutoHint';
                hint.style.cssText = 'font-size:11px;color:#93c5fd;margin-top:6px;line-height:1.4;cursor:pointer';
                pInput.parentNode.appendChild(hint);
            }
            const curList = current.split(',').map(s => s.trim()).filter(Boolean);
            const missing = params.filter(p => !curList.includes(p));
            if (missing.length) {
                hint.textContent = `Detected in URL: ${params.join(', ')} — missing in -p: ${missing.join(', ')} (click to add)`;
                hint.onclick = () => {
                    pInput.value = [...new Set([...curList, ...missing])].join(',');
                    pInput.dispatchEvent(new Event('input', {bubbles:true}));
                    hint.textContent = `Added: ${missing.join(', ')} ✓`;
                };
            } else {
                hint.textContent = `Detected in URL: ${params.join(', ')} ✓`;
                hint.onclick = null;
                hint.style.cursor = 'default';
            }
        }
    }

    setupTabs() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabId = e.currentTarget.dataset.tab;
                this.goToTab(tabId);
            });
        });
    }

    setupSliders() {
        // Level slider
        const levelSlider = document.getElementById('level');
        const levelValue = document.getElementById('levelValue');
        levelSlider.addEventListener('input', (e) => {
            levelValue.textContent = e.target.value;
            let levelHelp = "";
            switch (levelSlider.value) {
                case "1": levelHelp = "1: Fastest and least intrusive testing of GET and POST parameters (default)."; break;
                case "2": levelHelp = "2: Additionally test injections in the Cookie header."; break;
                case "3": levelHelp = "3: Additionally test injections in User-Agent and Referer headers."; break;
                case "4": levelHelp = "4: Additionally perform more advanced tests, such as null values and some extra payloads."; break;
                case "5": levelHelp = "5: Additionally test Host header, using all possible payloads."; break;
            }
            document.getElementById('level-help').textContent = levelHelp;
        });

        // Risk slider
        const riskSlider = document.getElementById('risk');
        const riskValue = document.getElementById('riskValue');
        riskSlider.addEventListener('input', (e) => {
            riskValue.textContent = e.target.value;
            let riskHelp = "";
            switch (riskSlider.value) {
                case "1": riskHelp = "1: Innocuous test for the majority of SQL injection points (default)."; break;
                case "2": riskHelp = "2: Adds also time-based SQL injections."; break;
                case "3": riskHelp = "3: Adds also OR-based SQL injection tests."; break;
            }
            document.getElementById('risk-help').textContent = riskHelp;
        });

        // Verbose slider
        const verboseSlider = document.getElementById('verbose');
        const verboseValue = document.getElementById('verboseValue');
        verboseSlider.addEventListener('input', (e) => {
            verboseValue.textContent = e.target.value;
            let verboseHelp = "";
            switch (verboseSlider.value) {
                case "0": verboseHelp = "0: Show only Python tracebacks, error and critical messages."; break;
                case "1": verboseHelp = "1: Show also information and warning messages (default)."; break;
                case "2": verboseHelp = "2: Show also debug messages."; break;
                case "3": verboseHelp = "3: Show also payloads injected."; break;
                case "4": verboseHelp = "4: Show also HTTP requests."; break;
                case "5": verboseHelp = "5: Show also HTTP responses' headers."; break;
                case "6": verboseHelp = "6: Show also HTTP responses' page content."; break;
            }
            document.getElementById('verbose-help').textContent = verboseHelp;
        });

        // Add dot ticks under sliders (makes range obvious)
        const addTicks = (sliderEl, labels) => {
            if (!sliderEl || sliderEl.nextElementSibling?.classList.contains('slider-ticks')) return;
            const wrap = document.createElement('div');
            wrap.className = 'slider-ticks';
            wrap.setAttribute('aria-hidden', 'true');
            const min = parseInt(sliderEl.min, 10) || 1;
            const update = () => {
                const val = parseInt(sliderEl.value, 10);
                Array.from(wrap.children).forEach((tick, idx) => {
                    tick.classList.toggle('tick-active', (min + idx) <= val);
                });
            };
            labels.forEach(lab => {
                const span = document.createElement('button');
                span.type = 'button';
                span.className = 'tick';
                span.setAttribute('aria-label', `Set ${sliderEl.id} to ${lab}`);
                span.innerHTML = `<span class="dot"></span><span class="tick-label">${lab}</span>`;
                span.addEventListener('click', () => {
                    sliderEl.value = lab;
                    sliderEl.dispatchEvent(new Event('input', {bubbles:true}));
                    sliderEl.dispatchEvent(new Event('change', {bubbles:true}));
                    update();
                });
                wrap.appendChild(span);
            });
            sliderEl.insertAdjacentElement('afterend', wrap);
            sliderEl.addEventListener('input', update);
            update();
        };
        addTicks(levelSlider, [1,2,3,4,5]);
        addTicks(riskSlider, [1,2,3]);
        addTicks(verboseSlider, [0,1,2,3,4,5,6]);

        // Select-all for attack techniques
        const techIds = ['techB','techE','techU','techS','techT','techQ'];
        const header = document.querySelector('#injection .checkbox-grid')?.previousElementSibling;
        if (header && !document.getElementById('selectAllTech')) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.id = 'selectAllTech';
            btn.className = 'btn btn--secondary btn--sm';
            btn.style.cssText = 'margin-left:12px;padding:4px 10px;min-height:28px;font-size:11px';
            const updateLabel = () => {
                const allChecked = techIds.every(id => document.getElementById(id)?.checked);
                btn.innerHTML = `${ic(allChecked ? 'eyeoff' : 'check')} ${allChecked ? 'Clear all' : 'Select all'}`;
            };
            btn.addEventListener('click', () => {
                const allChecked = techIds.every(id => document.getElementById(id)?.checked);
                techIds.forEach(id => {
                    const el = document.getElementById(id);
                    if (el) { el.checked = !allChecked; el.dispatchEvent(new Event('change', {bubbles:true})); }
                });
                updateLabel();
                this.updateCommand();
            });
            techIds.forEach(id => document.getElementById(id)?.addEventListener('change', updateLabel));
            header.appendChild(btn);
            header.style.display = 'flex';
            header.style.alignItems = 'center';
            updateLabel();
        }
    }

    generateCommand() {
        const config = this.getCurrentConfig();
        let command = 'sqlmap';
        
        // Order of parameters for better readability
        const paramOrder = Object.keys(this.paramMapping);
        
        // Add parameters in order
        paramOrder.forEach(param => {
            if (config.hasOwnProperty(param)) {
                if (config[param] === true) {
                    command += ` ${param}`;
                } else {
                    let raw = config[param].toString();
                    // Decide if quoting is needed: spaces, shell metachars, quotes, or newlines
                    const needsQuote = /[\s&;`$\\'"*?<>|()=]/.test(raw) || raw.includes('\n') || raw.includes('"') || raw.includes("'") || raw === '';
                    if (needsQuote) {
                        // Escape backslashes and double quotes, and normalize newlines
                        const escaped = raw.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
                        command += ` ${param} "${escaped}"`;
                    } else {
                        command += ` ${param} ${raw}`;
                    }
                }
            }
        });
        
        return command;
    }

    handleHashtag() {
        // Check if we have hashtag with proper config and load it if so
        try {
            let hashtag = location.hash.substr(1);
            if (hashtag.length > 0 && hashtag !== "e30=") {
                let hashtagCmd = JSON.parse(atob(hashtag));
                this.applyConfiguration(hashtagCmd);
                this.showMessage("Configuration loaded from the URL", 'success');
            }
        } catch (ex) {
            this.showMessage("Cannot load a configuration", 'error');
            console.log(ex);
        } 
    }

    updateCommand() {
            const command = this.generateCommand();
            const commandOutput = document.getElementById('commandOutput');
            const isEmpty = command.trim() === 'sqlmap';
            if (isEmpty) {
                commandOutput.textContent = 'sqlmap -u "https://example.com/page?id=1"';
                this.commandEmptyHint = true;
            } else {
                this.commandEmptyHint = false;
                commandOutput.textContent = command;
            }

            // Add syntax highlighting
            this.applySyntaxHighlighting(commandOutput);
            if (isEmpty) {
                commandOutput.style.opacity = '0.45';
                let hint = document.getElementById('cmd-hint');
                if (!hint) {
                    hint = document.createElement('div');
                    hint.id = 'cmd-hint';
                    hint.className = 'cmd-empty-hint';
                    commandOutput.parentNode.appendChild(hint);
                }
                hint.textContent = 'Start here — go to Step 1 · Website and paste your link';
            } else {
                commandOutput.style.opacity = '';
                const hint = document.getElementById('cmd-hint');
                if (hint) hint.remove();
            }
    }

    applySyntaxHighlighting(element) {
        let text = element.textContent;
        // Escape HTML to prevent XSS via command values
        let html = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        // Highlight sqlmap command first (anchored)
        html = html.replace(/^sqlmap/, "<span class='flag'>sqlmap</span>");
        // Highlight options (starting with -)
        html = html.replace(/(--?[\w-]+)/g, "<span class='option'>$1</span>");
        // Highlight quoted values (handles escaped quotes)
        html = html.replace(/"([^"]*?)"/g, "<span class='value'>\"$1\"</span>");
        element.innerHTML = html;
    }

    async copyCommand() {
        const command = this.generateCommand();
        const copyBtn = document.getElementById('copyBtn');
        const successMessage = "SQLMap command has been copied to your clipboard";

        try 
        {
            copyBtn.classList.add('copying');
            await navigator.clipboard.writeText(command);
            this.showMessage(successMessage, "success");
        } 
        catch (err) 
        {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = command;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showMessage(successMessage, "success");
        }
        finally 
        {
            setTimeout(() => {
                copyBtn.classList.remove('copying');
            }, 1000);
        }
    }

    async copyUrl() {
        const serializedCommand = btoa(JSON.stringify(this.getCurrentConfig()));
        const copyUrlBtn = document.getElementById('copyUrlBtn');
        const successMessage = "URL with configuration has been copied to your clipboard";
        if (serializedCommand == "e30=") {
            location.replace("#");
        }
        else {
            location.replace("#" + serializedCommand);
        }

        try 
        {
            copyUrlBtn.classList.add('copying');
            await navigator.clipboard.writeText(location.href);
            this.showMessage(successMessage, "success");
        } 
        catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showMessage(successMessage, "success");
        } 
        finally {
            setTimeout(() => {
                copyUrlBtn.classList.remove('copying');
            }, 1000);
        }
    }

    saveConfiguration() {
        const config = this.getCurrentConfig();
        const configStr = JSON.stringify(config, null, 2);
        
        // Create downloadable file
        const blob = new Blob([configStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sqlmap-config.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showMessage('Configuration saved', 'success');
    }

    loadConfiguration() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const config = JSON.parse(e.target.result);
                    this.applyConfiguration(config);
                    this.showMessage('Configuration loaded', 'success');
                } catch (err) {
                    this.showMessage('Error during loading the config', 'error');
                }
            };
            reader.readAsText(file);
        };
        
        input.click();
    }

    applyConfiguration(config) {
        // Reset form first
        this.resetConfiguration(true);
        
        // Apply configuration
        Object.entries(config).forEach(([param, value]) => {
            // Handle special multi-checkbox params first (no single element mapping)
            if (param === '--technique') {
                ['B', 'E', 'U', 'S', 'T', 'Q'].forEach(tech => {
                    const techElement = document.getElementById('tech' + tech);
                    if (techElement) {
                        techElement.checked = value.includes(tech);
                    }
                });
                return;
            }
            if (param === '--tamper') {
                const selectedTampers = value.split(',').map(v => v.trim()).filter(Boolean);
                this.tamperScriptList.forEach(s => {
                    const sElement = document.getElementById('tamperscript-' + s);
                    if (sElement) {
                        sElement.checked = selectedTampers.includes(s);
                    }
                });
                const tamperInput = document.getElementById('tamper');
                if (tamperInput) tamperInput.value = value;
                return;
            }
            const elementId = this.paramMapping[param];
            if (elementId) {
                const element = document.getElementById(elementId);
                if (element) {
                    if (element.type === 'checkbox') {
                        element.checked = value === true;
                    } else {
                        element.value = value;
                        // Update slider displays
                        if (element.type === 'range') {
                            const displayElement = document.getElementById(elementId + 'Value');
                            if (displayElement) {
                                displayElement.textContent = value;
                            }
                        }
                    }
                }
            }
        });
        
        this.updateCommand();
    }

    resetConfiguration(skipResetAlert = false) {
        // Reset all form fields
        document.querySelectorAll('input, select, textarea').forEach(element => {
            if (element.type === 'checkbox') {
                element.checked = false;
            } else if (element.type === 'range') {
                element.value = element.min || 1;
                // Update slider displays
                const displayElement = document.getElementById(element.id + 'Value');
                if (displayElement) {
                    displayElement.textContent = element.value;
                }
            } else {
                element.value = '';
            }
        });
        
        // Reset verbose to default
        document.getElementById('verbose').value = 1; 
        document.getElementById('verboseValue').textContent = "1"; 
        document.getElementById('verbose-help').textContent = "1: Show also information and warning messages (default).";
        // Hide custom user agent field
        document.getElementById('customHttpMethodGroup').style.display = 'none';
        document.getElementById('customUserAgentGroup').style.display = 'none';
        document.getElementById('customCsrfMethodGroup').style.display = 'none';
        
        this.updateCommand();
        if (!skipResetAlert) {
            this.showMessage('The configuration has been cleared', 'success');
        }
    }

    loadTemplate(template) {
        if (!template) return;
        this.showMessage(`Template '${template}' not implemented in this build`, 'info');
    }

    showMessage(message, type = 'info') {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `status status--${type}`;
        messageEl.textContent = message;
        
        document.getElementById("status-container").appendChild(messageEl);
        
        // Remove after 6 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.parentNode.removeChild(messageEl);
            }
        }, 6000);
    }
}

// Initialize the application when DOM is loaded
let sqlgen = null;
document.addEventListener('DOMContentLoaded', () => {
    sqlgen = new SQLMapGenerator();
    document.querySelectorAll('input[type=text], textarea').forEach(field => field.spellcheck = false);

    // document.querySelectorAll('em.tooltip').forEach(el => {
    //     const text = el.textContent;
    //     el.textContent = '';
    //     el.dataset.tooltip = text;
    // });

    // GitHub promo popup — once per session, 1.2s after load
    try {
        const key = 'kishPopupSeen';
        if (!sessionStorage.getItem(key)) {
            setTimeout(() => {
                const overlay = document.getElementById('kishPopupOverlay');
                if (!overlay) return;
                overlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                const close = () => {
                    overlay.style.display = 'none';
                    document.body.style.overflow = '';
                    sessionStorage.setItem(key, '1');
                };
                document.getElementById('kishPopupClose')?.addEventListener('click', close);
                document.getElementById('kishPopupDismiss')?.addEventListener('click', close);
                overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
                document.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){ close(); document.removeEventListener('keydown', esc); }});
            }, 1200);
        }
    } catch {}
});
