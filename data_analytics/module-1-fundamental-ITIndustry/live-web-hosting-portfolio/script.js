/* ============================================================
   Deep Rayani Portfolio — Vanilla JavaScript Engine
   Modules: Theme, Nav, Typing, Reveal, Counter, Playground,
            Skills Filter, Project Filter, Modals, Form, Toast
   ============================================================ */

'use strict';

// ─── UTILS ────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function showToast(title, msg, duration = 3500) {
  const toast = $('toast');
  $('toast-title').textContent = title;
  $('toast-msg').textContent   = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ─── THEME TOGGLE ─────────────────────────────────────────────
(function initTheme() {
  const saved = localStorage.getItem('dr-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  applyThemeIcon(saved);

  $('theme-btn').addEventListener('click', () => {
    const cur  = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('dr-theme', next);
    applyThemeIcon(next);
  });

  function applyThemeIcon(theme) {
    const icon = $('theme-icon');
    if (!icon) return;
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    icon.style.color = theme === 'dark' ? 'var(--accent-c)' : 'var(--accent-i)';
  }
})();

// ─── MOBILE NAV ───────────────────────────────────────────────
(function initMobileNav() {
  const ham = $('hamburger');
  const nav = $('mobile-nav');
  if (!ham || !nav) return;

  ham.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    ham.setAttribute('aria-expanded', open);
    $('ham-icon').className = open ? 'fas fa-xmark' : 'fas fa-bars';
  });

  // Close on link click
  nav.querySelectorAll('a, .mnav-btn').forEach(el => {
    el.addEventListener('click', () => {
      nav.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false');
      $('ham-icon').className = 'fas fa-bars';
    });
  });
})();

// ─── TYPING EFFECT ────────────────────────────────────────────
(function initTyping() {
  const el = $('typing-el');
  if (!el) return;
  const phrases = [
    'SQL Pipeline Architect',
    'Power BI DAX Specialist',
    'Python ML Engineer',
    'Tableau Visual Storyteller',
    'Snowflake Data Modeler',
    'Business Intelligence Leader',
  ];
  let pIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    const phrase = phrases[pIdx];
    if (!deleting) {
      cIdx++;
      el.textContent = phrase.slice(0, cIdx);
      if (cIdx === phrase.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      cIdx--;
      el.textContent = phrase.slice(0, cIdx);
      if (cIdx === 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 80);
  }
  tick();
})();

// ─── REVEAL ON SCROLL ─────────────────────────────────────────
(function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('active');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 5) * 0.07 + 's';
    obs.observe(el);
  });
})();

// ─── ANIMATED COUNTERS ────────────────────────────────────────
(function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el   = e.target;
      const to   = parseFloat(el.dataset.to);
      const dec  = parseInt(el.dataset.dec || '0');
      const sfx  = el.dataset.sfx || '';
      const dur  = 1600;
      const step = 16;
      const incr = to / (dur / step);
      let val    = 0;
      const iv   = setInterval(() => {
        val = Math.min(val + incr, to);
        el.textContent = (dec ? val.toFixed(dec) : Math.floor(val)) + sfx;
        if (val >= to) clearInterval(iv);
      }, step);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });

  $$('.ctr').forEach(el => obs.observe(el));
})();

// ─── SKILL BAR FILLS ──────────────────────────────────────────
(function initSkillBars() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.style.width = e.target.dataset.w;
      obs.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  $$('.skill-fill').forEach(el => obs.observe(el));
})();

// ─── INTERACTIVE PLAYGROUND ───────────────────────────────────
(function initPlayground() {
  const METRICS = {
    revenue: {
      color: '#06b6d4', label: 'Revenue ($K)', unit: '$',
      datasets: {
        all:  [820,960,1100,1050,1280,1190,1420],
        na:   [500,580,660,640,770,720,870],
        eu:   [200,240,280,260,320,300,370],
        apac: [120,140,160,150,190,170,180],
      },
      kpi1:'$1,420.5K', kpi2:'+34.8%', kpi3:'$1,117.1K',
      rows:[['Jan','$820K','+12%'],['Apr','$1,050K','+8%'],['Jul','$1,420K','+34%']],
    },
    churn: {
      color: '#ef4444', label: 'Churn Rate (%)', unit: '%',
      datasets: {
        all:  [8.2,7.9,7.5,7.1,6.6,6.1,5.8],
        na:   [9.0,8.6,8.1,7.7,7.2,6.8,6.3],
        eu:   [7.4,7.1,6.8,6.5,6.0,5.6,5.2],
        apac: [8.8,8.4,7.9,7.5,7.0,6.5,6.1],
      },
      kpi1:'5.8%', kpi2:'−29.3%', kpi3:'7.0%',
      rows:[['Jan','8.2%','Baseline'],['Apr','7.1%','−13%'],['Jul','5.8%','−29%']],
    },
    conversion: {
      color: '#10b981', label: 'Conversion Rate (%)', unit: '%',
      datasets: {
        all:  [2.1,2.4,2.8,3.1,3.5,3.8,4.2],
        na:   [2.5,2.8,3.2,3.6,4.0,4.3,4.7],
        eu:   [1.8,2.0,2.4,2.7,3.0,3.3,3.7],
        apac: [1.4,1.7,2.1,2.3,2.6,2.9,3.2],
      },
      kpi1:'4.2%', kpi2:'+100%', kpi3:'3.1%',
      rows:[['Jan','2.1%','Baseline'],['Apr','3.1%','+47%'],['Jul','4.2%','+100%']],
    },
    cac: {
      color: '#f59e0b', label: 'CAC ($)', unit: '$',
      datasets: {
        all:  [145,138,130,122,115,108,98],
        na:   [160,152,143,135,127,118,107],
        eu:   [130,124,116,110,104,98,89],
        apac: [120,115,108,100,94,88,80],
      },
      kpi1:'$98', kpi2:'−32.4%', kpi3:'$122',
      rows:[['Jan','$145','Baseline'],['Apr','$122','−16%'],['Jul','$98','−32%']],
    },
  };

  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];
  let activeMetric = 'revenue', activeRegion = 'all';

  const svg = $('pg-svg');
  if (!svg) return;

  function renderChart() {
    const m   = METRICS[activeMetric];
    const pts = m.datasets[activeRegion];
    const W   = svg.parentElement.clientWidth  || 400;
    const H   = svg.parentElement.clientHeight || 260;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

    const minV = Math.min(...pts) * 0.9;
    const maxV = Math.max(...pts) * 1.1;
    const xStep = (W - 60) / (pts.length - 1);

    const toX = i => 40 + i * xStep;
    const toY = v => H - 30 - ((v - minV) / (maxV - minV)) * (H - 55);

    const pathD = pts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i).toFixed(1)} ${toY(v).toFixed(1)}`).join(' ');
    const areaD = pathD + ` L ${toX(pts.length-1).toFixed(1)} ${H-30} L ${toX(0).toFixed(1)} ${H-30} Z`;

    const gradId = `grad-${activeMetric}`;
    svg.innerHTML = `
      <defs>
        <linearGradient id="${gradId}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${m.color}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${m.color}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <!-- Grid lines -->
      ${Array.from({length:4},(_,i)=>{
        const y = 15 + i * ((H-45)/3);
        const v = (maxV - (maxV-minV)*i/3);
        const vLabel = activeMetric === 'revenue' ? `$${Math.round(v/100)/10}K` : `${v.toFixed(1)}${m.unit}`;
        return `<line x1="40" y1="${y.toFixed(1)}" x2="${W}" y2="${y.toFixed(1)}" stroke="rgba(255,255,255,.05)" stroke-width="1"/>
                <text x="5" y="${(y+4).toFixed(1)}" fill="rgba(148,163,184,.6)" font-size="9" font-family="JetBrains Mono,monospace">${vLabel}</text>`;
      }).join('')}
      <!-- Area -->
      <path d="${areaD}" fill="url(#${gradId})"/>
      <!-- Line -->
      <path d="${pathD}" fill="none" stroke="${m.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="chart-line"/>
      <!-- X labels -->
      ${MONTHS.map((lbl,i)=>`<text x="${toX(i).toFixed(1)}" y="${H-12}" text-anchor="middle" fill="rgba(148,163,184,.6)" font-size="9" font-family="JetBrains Mono,monospace">${lbl}</text>`).join('')}
      <!-- Datapoints -->
      ${pts.map((v,i)=>{
        const vLabel = activeMetric === 'revenue' ? `$${(v/1000).toFixed(0)}K` : `${v}${m.unit}`;
        return `<circle cx="${toX(i).toFixed(1)}" cy="${toY(v).toFixed(1)}" r="5" fill="${m.color}" stroke="var(--bg-primary)" stroke-width="2" style="cursor:pointer" data-val="${vLabel}" data-mon="${MONTHS[i]}">
                  <title>${MONTHS[i]}: ${vLabel}</title>
                </circle>`;
      }).join('')}
    `;
  }

  function renderKPIs() {
    const m = METRICS[activeMetric];
    $('pg-kpi1').textContent = m.kpi1;
    $('pg-kpi2').textContent = m.kpi2;
    $('pg-kpi3').textContent = m.kpi3;
    $('pg-table').innerHTML  = m.rows.map(([a,b,c]) =>
      `<tr><td>${a}</td><td>${b}</td><td>${c}</td></tr>`
    ).join('');
  }

  function update() {
    renderChart();
    renderKPIs();
  }

  // Metric buttons
  $$('#metric-btns .mbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('#metric-btns .mbtn').forEach(b => b.className = 'mbtn');
      btn.classList.add('active-c');
      activeMetric = btn.dataset.metric;
      update();
    });
  });

  // Region buttons
  $$('#region-btns .mbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('#region-btns .mbtn').forEach(b => b.className = 'mbtn');
      btn.classList.add('active-i');
      activeRegion = btn.dataset.region;
      update();
    });
  });

  update();
  window.addEventListener('resize', update);
})();

// ─── SKILLS FILTER ────────────────────────────────────────────
(function initSkillsFilter() {
  const btns  = $$('#skills .filter-btn');
  const cards = $$('#skills-grid .skill-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.cat === cat;
        card.style.display = match ? '' : 'none';
      });
    });
  });
})();

// ─── PROJECT FILTER ───────────────────────────────────────────
(function initProjectFilter() {
  const btns  = $$('#projects .filter-btn');
  const cards = $$('#projects .proj-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(card => {
        const match = f === 'all' || card.dataset.filter === f;
        card.style.display = match ? '' : 'none';
      });
    });
  });
})();

// ─── CASE STUDY DATA ──────────────────────────────────────────
const CASES = {
  churn: {
    cat:'Python & ML · Telecom Analytics',
    title:'Telecom Customer Churn Prediction & Retention Engine',
    subtitle:'250,000+ subscriber records · XGBoost · Random Forest · Streamlit',
    metrics:[
      {lbl:'Churn Drop',val:'22%'},
      {lbl:'ROC-AUC',val:'0.894'},
      {lbl:'Annual ROI',val:'$420K'},
    ],
    problem:'A major telecom operator was experiencing 8.2% monthly churn — translating to $1.8M annual subscriber revenue loss. Legacy reports lacked predictive capability; analysts could only detect churn after cancellation.',
    method:[
      'Merged CRM, network, usage logs & billing data; Python ETL reduced 47 raw tables to 18 clean modeling features.',
      'Feature engineering: avg_call_drop_rate, tenure_bucket, plan_value_tier, data_usage_percentile.',
      'Benchmarked Logistic Regression, Random Forest, and XGBoost; XGBoost achieved AUC 0.894 with F1=0.81 at 0.45 threshold.',
      'SHAP analysis identified top 5 churn drivers: long avg_wait_time, high_bill_variance, low_data_usage, plan_mismatch.',
      'Streamlit retention portal deployed for Customer Success team — flagging top 500 monthly at-risk accounts.',
    ],
    codeTitle:'XGBoost Pipeline (Python)',
    code:`import xgboost as xgb
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import StratifiedKFold, cross_val_score

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('model', xgb.XGBClassifier(
        n_estimators=400, max_depth=6,
        learning_rate=0.05, subsample=0.8,
        colsample_bytree=0.7, scale_pos_weight=3,
        eval_metric='auc', random_state=42
    ))
])

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(pipeline, X_train, y_train,
                         cv=cv, scoring='roc_auc')
print(f"Mean AUC: {scores.mean():.4f} ± {scores.std():.4f}")
# Output: Mean AUC: 0.8940 ± 0.0121`,
  },
  powerbi: {
    cat:'Power BI · Enterprise BI · Sales Analytics',
    title:'Global Executive Sales & Operations Power BI Suite',
    subtitle:'12 Territories · 40+ DAX Measures · Salesforce + SQL Server + GA4',
    metrics:[
      {lbl:'Time Saved',val:'14 hrs/wk'},
      {lbl:'Revenue Found',val:'$1.2M'},
      {lbl:'Data Sources',val:'5 Live'},
    ],
    problem:'Executive leadership team at a global distributor relied on manually compiled Excel reports — taking 14+ hours weekly, prone to errors, and delivering insights 10 days late. No RLS, no cross-territory benchmarking, no forecasting.',
    method:[
      'Consolidated 5 data sources: SQL Server ERP, Salesforce CRM, Google Analytics 4, Inventory feeds, and HR tables via Power Query M.',
      'Engineered 40+ DAX measures including MTD/YTD/PY variance, rolling 12-month LTM revenue, and territory score-card KPIs.',
      'Implemented Row-Level Security (RLS) with regional manager roles: each territory VP sees only their hierarchy.',
      'Incremental refresh configured on fact_sales table (3.2M rows) — Power BI refresh dropped from 42 min to 8 min.',
      'Embedded report in SharePoint intranet; alert thresholds auto-notify VP Sales via Power Automate when churn risk spikes.',
    ],
    codeTitle:'DAX: Rolling 12-Month LTM Revenue',
    code:`LTM Revenue (Rolling 12M) =
CALCULATE(
    [Total Revenue],
    DATESINPERIOD(
        'Date'[Date],
        LASTDATE('Date'[Date]),
        -12, MONTH
    )
)

// Territory vs. Global Benchmark %
Territory vs Global % =
DIVIDE(
    [Total Revenue],
    CALCULATE([Total Revenue], ALL('Territory')),
    0
)`,
  },
  etl: {
    cat:'SQL & Data Engineering · E-Commerce Warehouse',
    title:'E-Commerce Star Schema Warehouse & ETL Pipeline',
    subtitle:'50M+ Rows · PostgreSQL + Snowflake · Apache Airflow DAGs',
    metrics:[
      {lbl:'Rows Loaded',val:'50M+'},
      {lbl:'Query Speed',val:'4.2×'},
      {lbl:'Pipeline Uptime',val:'99.9%'},
    ],
    problem:'A scaled e-commerce platform had fragmented data across 6 operational MySQL databases. No analytical layer existed — analysts ran ad-hoc queries directly on OLTP databases, causing 3-second executive query delays and production slowdowns.',
    method:[
      'Designed Kimball Star Schema: fact_orders (50M+) linked to dim_customer, dim_product, dim_date, dim_geography.',
      'Python ETL DAGs in Apache Airflow: daily incremental extraction, delta detection via CDC watermarks, and load validation.',
      'Snowflake virtual warehouse with clustering keys on order_date + region — reduced average executive query from 8.4s to 2.0s (4.2×).',
      'Data quality tests: row count reconciliation, NULL constraint checks, referential integrity via dbt test suites.',
      'Zero-copy cloning in Snowflake used for staging QA without storage overhead.',
    ],
    codeTitle:'Star Schema — Fact Orders SQL (PostgreSQL)',
    code:`-- Kimball Star Schema: Fact Orders
CREATE TABLE fact_orders (
    order_key      BIGSERIAL PRIMARY KEY,
    customer_key   INT REFERENCES dim_customer(customer_key),
    product_key    INT REFERENCES dim_product(product_key),
    date_key       INT REFERENCES dim_date(date_key),
    geography_key  INT REFERENCES dim_geography(geography_key),
    order_quantity INT NOT NULL,
    unit_price     DECIMAL(10,2) NOT NULL,
    discount_pct   DECIMAL(5,4) DEFAULT 0,
    revenue_net    DECIMAL(12,2) GENERATED ALWAYS AS
                   (unit_price * order_quantity * (1 - discount_pct)) STORED,
    loaded_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Covering index for exec dashboard
CREATE INDEX idx_fact_orders_date_geo
ON fact_orders(date_key, geography_key)
INCLUDE (revenue_net, order_quantity);`,
  },
  healthcare: {
    cat:'Healthcare Analytics · Predictive Modeling · Clinical BI',
    title:'Patient Readmission Analytics & Risk Stratification',
    subtitle:'120,000 Patient Cohort · 95% CI · Tableau Clinical Dashboard',
    metrics:[
      {lbl:'Readmission Drop',val:'−18%'},
      {lbl:'Confidence',val:'95%'},
      {lbl:'Risk Flags',val:'1,200+'},
    ],
    problem:"Hospital administration faced CMS readmission penalties exceeding $800K annually due to 30-day readmission rates above national benchmarks. Clinical staff lacked actionable risk stratification at point of care — decisions were made on intuition, not data.",
    method:[
      'De-identified EHR SQL extraction: diagnoses (ICD-10), procedures, labs, medications, social determinants (insurance tier, ZIP SDOH index).',
      'Logistic Regression with LASSO regularization (R glmnet) — 23 predictors reduced to 12 significant features at p<0.05.',
      'Independent variables: Charlson Comorbidity Index, prior_30d_admissions, discharge_to_rehab, HbA1c_level, LOS_days.',
      'Model calibration via Hosmer-Lemeshow test (p=0.42, well-calibrated). AUC = 0.78 on held-out test set.',
      'Tableau dashboard deployed to clinical iPad stations — color-coded Red/Yellow/Green risk flags per patient for daily huddles.',
    ],
    codeTitle:'Logistic Regression with LASSO (R)',
    code:`library(glmnet)
library(pROC)

# Fit LASSO Logistic Regression
x <- model.matrix(readmit_30d ~ ., data = ehr_train)[,-1]
y <- ehr_train$readmit_30d

set.seed(99)
cv_fit <- cv.glmnet(x, y, family = "binomial",
                    alpha = 1, nfolds = 10,
                    type.measure = "auc")

best_lambda <- cv_fit$lambda.min
cat("Optimal Lambda:", best_lambda)

# Predict & Evaluate
pred <- predict(cv_fit, newx = model.matrix(readmit_30d ~ .,
               data=ehr_test)[,-1],
               s = "lambda.min", type = "response")
roc_obj <- roc(ehr_test$readmit_30d, as.vector(pred))
cat("Test AUC:", auc(roc_obj))  # AUC: 0.782`,
  },
};

// ─── CASE STUDY MODAL ─────────────────────────────────────────
(function initCaseModals() {
  const overlay = $('case-modal');
  if (!overlay) return;

  $$('.open-case').forEach(btn => {
    btn.addEventListener('click', () => {
      const data = CASES[btn.dataset.case];
      if (!data) return;

      $('modal-cat').textContent      = data.cat;
      $('modal-title-el').textContent = data.title;
      $('modal-subtitle').textContent = data.subtitle;
      $('modal-problem').textContent  = data.problem;
      $('modal-snip-title').textContent = data.codeTitle;
      $('modal-code').textContent     = data.code;

      $('modal-metrics').innerHTML = data.metrics.map(m => `
        <div class="mm-card">
          <div class="mm-lbl">${m.lbl}</div>
          <div class="mm-val">${m.val}</div>
        </div>`).join('');

      $('modal-method').innerHTML = data.method.map(s => `
        <li><i class="fas fa-check-circle"></i> ${s}</li>`).join('');

      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  $('close-case').addEventListener('click', closeCase);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeCase(); });

  function closeCase() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
})();

// ─── RESUME MODAL ─────────────────────────────────────────────
(function initResumeModal() {
  const overlay = $('resume-modal');
  if (!overlay) return;

  $$('.open-resume').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  $('close-resume').addEventListener('click', () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  });
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

// ─── COPY BUTTONS ─────────────────────────────────────────────
$$('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      btn.style.color = 'var(--accent-e)';
      setTimeout(() => { btn.innerHTML = orig; btn.style.color = ''; }, 2000);
      showToast('Copied!', `"${text}" is now in your clipboard.`);
    } catch { btn.textContent = 'Error'; }
  });
});

// ─── CONTACT FORM ─────────────────────────────────────────────
(function initContactForm() {
  const form = $('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    ['f-name','f-email','f-msg'].forEach(id => {
      const inp = $(id);
      if (!inp.value.trim()) { inp.classList.add('error'); valid = false; }
      else inp.classList.remove('error');
    });

    const emailInp = $('f-email');
    if (emailInp.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInp.value)) {
      emailInp.classList.add('error');
      valid = false;
    }

    if (!valid) {
      showToast('Missing Fields', 'Please fill in all required fields correctly.', 3000);
      return;
    }

    const btn = form.querySelector('.submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Transmit Message';
      form.reset();
      showToast('Message Sent! ✅', "Thanks! Deep will respond within 24 hours.", 4500);
    }, 1800);
  });

  // Clear error on input
  form.querySelectorAll('.form-input').forEach(inp => {
    inp.addEventListener('input', () => inp.classList.remove('error'));
  });
})();

// ─── LIVE CLOCK ───────────────────────────────────────────────
(function initClock() {
  const el = $('live-clock');
  if (!el) return;
  function tick() {
    const d = new Date();
    el.textContent = d.toLocaleTimeString('en-US', { hour12:false, hour:'2-digit', minute:'2-digit', second:'2-digit' });
  }
  tick();
  setInterval(tick, 1000);
})();

// ─── BACK TO TOP ──────────────────────────────────────────────
(function initBTT() {
  const btn  = $('btt');
  const ring = $('btt-ring');
  if (!btn) return;
  const circ = 2 * Math.PI * 15.9155;

  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    btn.classList.toggle('vis', window.scrollY > 300);
    if (ring) ring.style.strokeDasharray = `${(pct * circ).toFixed(2)} ${circ}`;
  });

  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
})();

// ─── NAV SCROLL EFFECT ────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = $('nav');
  if (nav) nav.style.boxShadow = window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,.25)' : '';
});

// ─── KEYBOARD MODAL CLOSE ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['case-modal','resume-modal'].forEach(id => {
      const el = $(id);
      if (el && el.classList.contains('open')) {
        el.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
});
