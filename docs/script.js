const projectData = {
    title: "MIST: Multilingual Incidental Dataset for Scene Text Detection",
    authors: [
        { name: "Saumya Mundra", affiliation: 1 },
        { name: "Ajoy Mondal", affiliation: 1 },
        { name: "C.V. Jawahar", affiliation: 1 }
    ],
    affiliations: [
        { id: 1, name: "CVIT, IIIT Hyderabad, India" }
    ],
    links: [
        { name: "Paper", icon: "fas fa-file-pdf", url: "#" },
        { name: "arXiv", icon: "fab fa-arxiv", url: "#" },
        { name: "Code", icon: "fab fa-github", url: "#" },
        { name: "Dataset", icon: "fas fa-database", url: "#" }
    ],
    abstract: `Scene text detection has progressed rapidly, largely driven by curated datasets and benchmarks. However, many of these have reached evaluation saturation and are heavily biased toward focused scenes, limiting their effectiveness in real-world environments where detection is hindered by environmental factors. To address this, we introduce <strong>MIST</strong> -- a <strong>M</strong>ultilingual <strong>I</strong>ncidental <strong>S</strong>cene <strong>T</strong>ext dataset featuring diverse text instances across 11 languages. MIST provides language, transcription, legibility, and fine-grained polygon-shaped annotations across 12K scene images and 600K word-level text instances. Images are captured along roads using a GoPro mounted on a moving car to capture real-world complexities, ensuring the scenes are <strong>incidental</strong> rather than deliberately framed. MIST establishes a new challenging benchmark to enable robust evaluation of scene text detection methods in real-world scenarios.`,
    method: {
        teaser: {
            image: "images/teaser.svg",
            caption: "Diverse and complex text instances in MIST, including multilingual, occluded, motion-blurred, and perspective text."
        },
        description: [
            `<strong>MIST</strong> comprises <strong>12K scene images</strong> containing <strong>576K text instances</strong> across <strong>11 scripts</strong> (English, Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Oriya, Punjabi, Tamil, and Telugu). Each image is high-resolution (1920×1080).`,
            `To ensure temporal and regional diversity, we enforced per-region and per-sequence quotas and sampled uniformly over time. The dataset is split into training, validation, and testing (benchmark) sets in a 4:1:1 ratio.`,
            `MIST is designed to be highly <strong>incidental</strong>. We quantify this using metrics like \\(M_3\\) (average area of text instance relative to image), where MIST shows significantly smaller text instances compared to existing focused datasets, mirroring real-world complexity.`
        ]
    },
    results: {
        items: [
            {
                type: "table",
                title: "Performance Comparison",
                span: 2,
                data: [
                    { model: "DP-DETR", pretrain: "Syn", precision: "69.61", recall: "57.04", fmeasure: "62.70", highlight: true },
                    { model: "TBPN", pretrain: "MLT", precision: "70.87", recall: "47.75", fmeasure: "57.06" },
                    { model: "MixNet", pretrain: "Syn", precision: "73.48", recall: "45.59", fmeasure: "56.27" },
                    { model: "DB++", pretrain: "Syn", precision: "72.84", recall: "39.73", fmeasure: "51.42" }
                ],
                caption: "Benchmarking results on MIST. DP-DETR achieves the best performance, but overall scores suggest significant room for improvement in handling incidental scenes."
            }
        ]
    },
    characteristics: {
        intro: "We define metrics to quantify the incidental nature of scene text datasets. MIST proves to be the most incidental, with significantly more text instances per image and smaller text scales compared to existing datasets.",
        metrics: [
            {
                name: "M₁",
                description: "Average number of text instances per image. Higher values indicate more text-dense scenes.",
                formula: "M₁ = (1/|D|) Σ N_i"
            },
            {
                name: "M₂",
                description: "Instance-weighted mean area proportion of text relative to image. Lower values indicate smaller text.",
                formula: "M₂ = (1/ΣN_i) ΣΣ (A_t / A_I)"
            },
            {
                name: "M₃",
                description: "Average area proportion of text per image. Lower M₃ indicates higher incidentalness.",
                formula: "M₃ = (1/|D|) Σ (Σ A_t / A_I·N_i)"
            }
        ],
        comparisonTable: [
            { dataset: "Total-Text", m1: 6, m2: "0.01093", m3: "0.01747", images: "1,555", instances: "9,330" },
            { dataset: "CTW1500", m1: 8, m2: "0.01796", m3: "0.02778", images: "1,500", instances: "12,000" },
            { dataset: "MLT17", m1: 12, m2: "0.01017", m3: "0.02893", images: "18,000", instances: "216,000" },
            { dataset: "ICDAR-ArT", m1: 11, m2: "0.01230", m3: "0.02174", images: "10,166", instances: "111,826" },
            { dataset: "ICDAR15", m1: 12, m2: "0.00204", m3: "0.00300", images: "1,500", instances: "18,000" },
            { dataset: "COCO-Text", m1: 5, m2: "0.00344", m3: "0.00613", images: "63,686", instances: "318,430" },
            { dataset: "MLT19", m1: 11, m2: "0.01125", m3: "0.03261", images: "20,000", instances: "220,000" },
            { dataset: "LSVT", m1: 13, m2: "0.01270", m3: "0.00750", images: "30,000", instances: "390,000" },
            { dataset: "Uber-Text", m1: "3.46", m2: "0.00277", m3: "0.00230", images: "82,572", instances: "285,699" },
            { dataset: "DOST", m1: "32.77", m2: "0.00090", m3: "0.00110", images: "338", instances: "11,076", highlight: "second" },
            { dataset: "MIST (ours)", m1: 48, m2: "0.00067", m3: "0.00084", images: "12,000", instances: "576,000", highlight: "best" }
        ],
        analysis: [
            "MIST displays a <strong>well-balanced</strong> and <strong>dense</strong> text distribution compared to existing datasets. With M₁ = 48, MIST has approximately <strong>4× the text density</strong> of ICDAR15 and <strong>6× that of COCO-Text</strong>.",
            "The M₃ metric reveals MIST's highly incidental nature. MIST's average M₃ is <strong>15-20× smaller</strong> than focused datasets and <strong>4× smaller</strong> than incidental counterparts, indicating significantly smaller text instances that mirror real-world complexity."
        ],
        m1Figures: [
            { src: "images/m1_totaltext.png", label: "Total-Text" },
            { src: "images/m1_ctw1500.png", label: "CTW1500" },
            { src: "images/m1_mlt17.png", label: "MLT17" },
            { src: "images/m1_icdarart.png", label: "ICDAR-ArT" },
            { src: "images/m1_icdar15.png", label: "ICDAR15" },
            { src: "images/m1_coco.png", label: "COCO-Text" },
            { src: "images/m1_mlt19.png", label: "MLT19" },
            { src: "images/m1_roadtext.png", label: "RoadText-1K" },
            { src: "images/m1_lsvt.png", label: "LSVT" },
            { src: "images/m1_comparison.png", label: "Mean Comparison" }
        ],
        m3Figures: [
            { src: "images/m3_totaltext.png", label: "Total-Text" },
            { src: "images/m3_ctw1500.png", label: "CTW1500" },
            { src: "images/m3_mlt17.png", label: "MLT17" },
            { src: "images/m3_icdarart.png", label: "ICDAR-ArT" },
            { src: "images/m3_icdar15.png", label: "ICDAR15" },
            { src: "images/m3_coco.png", label: "COCO-Text" },
            { src: "images/m3_mlt19.png", label: "MLT19" },
            { src: "images/m3_roadtext.png", label: "RoadText-1K" },
            { src: "images/m3_lsvt.png", label: "LSVT" },
            { src: "images/m3_comparison.png", label: "Mean Comparison" }
        ]
    },
    citation: `@article{mist2025,
  title={MIST: Multilingual Incidental Dataset for Scene Text Detection},
  author={Mundra, Saumya and Mondal, Ajoy and Jawahar, C.V.},
  journal={WACV},
  year={2026}
}`
};

// Main initialization
function init() {
    console.log("MIST: Initializing...");
    try {
        renderHeader();
    } catch (e) { console.error("Error rendering header:", e); }

    try {
        renderAbstract();
    } catch (e) { console.error("Error rendering abstract:", e); }

    try {
        renderMethod();
    } catch (e) { console.error("Error rendering method:", e); }

    try {
        renderCharacteristics();
    } catch (e) { console.error("Error rendering characteristics:", e); }

    try {
        renderResults();
    } catch (e) { console.error("Error rendering results:", e); }

    try {
        renderCitation();
    } catch (e) { console.error("Error rendering citation:", e); }

    try {
        initInteractions();
    } catch (e) { console.error("Error initializing interactions:", e); }

    console.log("MIST: Initialization complete.");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function renderHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    // Title
    const h1 = document.createElement('h1');
    h1.textContent = projectData.title;
    header.appendChild(h1);

    // Authors
    const authorsDiv = document.createElement('div');
    authorsDiv.className = 'authors';
    projectData.authors.forEach((author, index) => {
        const a = document.createElement('a');
        a.href = "#";
        a.className = 'author-name';
        a.textContent = author.name;
        authorsDiv.appendChild(a);

        const sup = document.createElement('sup');
        sup.textContent = author.affiliation;
        authorsDiv.appendChild(sup);

        if (index < projectData.authors.length - 1) {
            authorsDiv.appendChild(document.createTextNode(', '));
        }
    });
    header.appendChild(authorsDiv);

    // Affiliations
    const affDiv = document.createElement('div');
    affDiv.className = 'affiliations';
    projectData.affiliations.forEach((aff, index) => {
        const sup = document.createElement('sup');
        sup.textContent = aff.id;
        affDiv.appendChild(sup);
        affDiv.appendChild(document.createTextNode(aff.name));
        if (index < projectData.affiliations.length - 1) {
            affDiv.appendChild(document.createTextNode(', '));
        }
    });
    header.appendChild(affDiv);

    // Links
    const linksDiv = document.createElement('div');
    linksDiv.className = 'links';
    projectData.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'btn';
        a.innerHTML = `<i class="${link.icon}"></i> ${link.name}`;
        linksDiv.appendChild(a);
    });
    header.appendChild(linksDiv);
}

function renderAbstract() {
    const section = document.getElementById('abstract');
    if (!section) return;
    const p = document.createElement('p');
    p.className = 'abstract-text';
    p.innerHTML = projectData.abstract;
    section.appendChild(p);
}

function renderMethod() {
    const container = document.querySelector('#method .method-overview');
    if (!container) return;

    // Teaser
    const teaserDiv = document.createElement('div');
    teaserDiv.style.cssText = "padding: 2rem; background: rgba(255,255,255,0.05); text-align: center;";
    teaserDiv.innerHTML = `
        <img src="${projectData.method.teaser.image}" alt="MIST Dataset Examples" style="max-width: 100%; border-radius: 8px;">
        <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted);">${projectData.method.teaser.caption}</p>
    `;
    container.appendChild(teaserDiv);

    // Description
    const descDiv = document.createElement('div');
    descDiv.style.padding = "2rem";
    projectData.method.description.forEach(text => {
        const p = document.createElement('p');
        // Fix LaTeX M3 to HTML
        const processedText = text.replace(/\\\(M_3\\\)/g, "<i>M<sub>3</sub></i>");
        p.innerHTML = processedText;
        descDiv.appendChild(p);
    });
    container.appendChild(descDiv);
}

function renderCharacteristics() {
    console.log("MIST: Rendering characteristics...");
    const container = document.querySelector('#characteristics .characteristics-content');
    console.log("Characteristics container:", container);
    if (!container) {
        console.error("Characteristics container not found!");
        return;
    }

    // Intro
    const intro = document.createElement('p');
    intro.innerHTML = projectData.characteristics.intro;
    intro.style.cssText = "margin-bottom: 2rem; font-size: 1.1rem;";
    container.appendChild(intro);

    // Metrics Cards
    const metricsGrid = document.createElement('div');
    metricsGrid.style.cssText = "display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;";

    projectData.characteristics.metrics.forEach(metric => {
        const card = document.createElement('div');
        card.style.cssText = "background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 16px; border: 1px solid var(--glass-border);";
        card.innerHTML = `
            <h3 style="font-family: var(--font-heading); color: var(--primary); font-size: 1.5rem; margin-bottom: 0.5rem;">${metric.name}</h3>
            <p style="font-size: 0.9rem; color: var(--text-dim); margin-bottom: 0.75rem; font-family: monospace;">${metric.formula}</p>
            <p style="font-size: 0.95rem; color: var(--text-muted);">${metric.description}</p>
        `;
        metricsGrid.appendChild(card);
    });
    container.appendChild(metricsGrid);

    // Comparison Table
    const tableTitle = document.createElement('h3');
    tableTitle.textContent = "Dataset Comparison";
    tableTitle.style.cssText = "font-family: var(--font-heading); margin: 2rem 0 1rem; font-size: 1.3rem;";
    container.appendChild(tableTitle);

    const table = document.createElement('table');
    table.style.cssText = "width: 100%; border-collapse: separate; border-spacing: 0 0.5rem; font-size: 0.9rem;";

    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th style="text-align: left; padding: 0.75rem;">Dataset</th>
            <th style="text-align: center; padding: 0.75rem;">M₁↑</th>
            <th style="text-align: center; padding: 0.75rem;">M₂↓</th>
            <th style="text-align: center; padding: 0.75rem;">M₃↓</th>
            <th style="text-align: center; padding: 0.75rem;">#Images</th>
            <th style="text-align: center; padding: 0.75rem;">#Instances</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    projectData.characteristics.comparisonTable.forEach(row => {
        const tr = document.createElement('tr');
        let rowStyle = "background: rgba(255,255,255,0.02);";
        if (row.highlight === "best") rowStyle = "background: rgba(139, 92, 246, 0.1); font-weight: 600;";
        if (row.highlight === "second") rowStyle = "background: rgba(139, 92, 246, 0.05);";

        tr.innerHTML = `
            <td style="padding: 0.75rem; ${rowStyle} border-radius: 10px 0 0 10px;">${row.dataset}</td>
            <td style="text-align: center; padding: 0.75rem; ${rowStyle}">${row.m1}</td>
            <td style="text-align: center; padding: 0.75rem; ${rowStyle}">${row.m2}</td>
            <td style="text-align: center; padding: 0.75rem; ${rowStyle}">${row.m3}</td>
            <td style="text-align: center; padding: 0.75rem; ${rowStyle}">${row.images}</td>
            <td style="text-align: center; padding: 0.75rem; ${rowStyle} border-radius: 0 10px 10px 0;">${row.instances}</td>
        `;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    container.appendChild(table);

    // Analysis
    const analysisDiv = document.createElement('div');
    analysisDiv.style.cssText = "margin: 2rem 0;";
    projectData.characteristics.analysis.forEach(text => {
        const p = document.createElement('p');
        p.innerHTML = text;
        p.style.marginBottom = "1rem";
        analysisDiv.appendChild(p);
    });
    container.appendChild(analysisDiv);

    // M1 Distribution Figures
    const m1Title = document.createElement('h3');
    m1Title.textContent = "M₁ Distribution: Text Instances per Image";
    m1Title.style.cssText = "font-family: var(--font-heading); margin: 3rem 0 1.5rem; font-size: 1.3rem; text-align: center;";
    container.appendChild(m1Title);

    const m1Grid = document.createElement('div');
    m1Grid.style.cssText = "display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1rem;";

    projectData.characteristics.m1Figures.forEach(fig => {
        const div = document.createElement('div');
        div.style.cssText = "text-align: center;";
        div.innerHTML = `
            <img src="${fig.src}" alt="${fig.label}" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border);">
            <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">${fig.label}</p>
        `;
        m1Grid.appendChild(div);
    });
    container.appendChild(m1Grid);

    const m1Caption = document.createElement('p');
    m1Caption.innerHTML = "Compares the <strong>distribution of text instances in scene images (M₁)</strong> of MIST against existing datasets.";
    m1Caption.style.cssText = "text-align: center; font-size: 0.9rem; color: var(--text-muted); margin-top: 1rem;";
    container.appendChild(m1Caption);

    // M3 Distribution Figures
    const m3Title = document.createElement('h3');
    m3Title.textContent = "M₃ Distribution: Average Text Instance Area";
    m3Title.style.cssText = "font-family: var(--font-heading); margin: 3rem 0 1.5rem; font-size: 1.3rem; text-align: center;";
    container.appendChild(m3Title);

    const m3Grid = document.createElement('div');
    m3Grid.style.cssText = "display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; margin-bottom: 1rem;";

    projectData.characteristics.m3Figures.forEach(fig => {
        const div = document.createElement('div');
        div.style.cssText = "text-align: center;";
        div.innerHTML = `
            <img src="${fig.src}" alt="${fig.label}" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border);">
            <p style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);">${fig.label}</p>
        `;
        m3Grid.appendChild(div);
    });
    container.appendChild(m3Grid);

    const m3Caption = document.createElement('p');
    m3Caption.innerHTML = "Comparison of the <strong>average area of a text instance relative to the scene image (M₃)</strong> in MIST against other benchmarks. The analysis employs kernel density estimation with logarithmic scales.";
    m3Caption.style.cssText = "text-align: center; font-size: 0.9rem; color: var(--text-muted); margin-top: 1rem;";
    container.appendChild(m3Caption);
}

function renderResults() {
    const grid = document.querySelector('#results .results-grid');
    if (!grid) return;

    projectData.results.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'result-item';
        if (item.span) div.style.gridColumn = `span ${item.span}`;

        if (item.type === 'table') {
            const h3 = document.createElement('h3');
            h3.style.cssText = "font-family: var(--font-heading); margin-bottom: 1rem; color: var(--text-main);";
            h3.textContent = item.title;
            div.appendChild(h3);

            const table = document.createElement('table');
            table.style.cssText = "width: 100%; border-collapse: collapse; color: var(--text-muted);";

            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr style="border-bottom: 1px solid var(--glass-border);">
                    <th style="text-align: left; padding: 0.5rem;">Model</th>
                    <th style="text-align: center; padding: 0.5rem;">Pretrain</th>
                    <th style="text-align: center; padding: 0.5rem;">Precision</th>
                    <th style="text-align: center; padding: 0.5rem;">Recall</th>
                    <th style="text-align: center; padding: 0.5rem;">F-Measure</th>
                </tr>
            `;
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            item.data.forEach(row => {
                const tr = document.createElement('tr');
                tr.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
                const highlightStyle = row.highlight ? 'color: var(--primary); font-weight: bold;' : '';
                tr.innerHTML = `
                    <td style="padding: 0.5rem;">${row.model}</td>
                    <td style="text-align: center;">${row.pretrain}</td>
                    <td style="text-align: center;">${row.precision}</td>
                    <td style="text-align: center;">${row.recall}</td>
                    <td style="text-align: center; ${highlightStyle}">${row.fmeasure}</td>
                `;
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);
            div.appendChild(table);

            const p = document.createElement('p');
            p.style.cssText = "margin-top: 1rem; font-size: 0.9rem;";
            p.textContent = item.caption;
            div.appendChild(p);

        } else if (item.type === 'image') {
            div.innerHTML = `
                <img src="${item.src}" alt="${item.alt}" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                <p style="text-align:center; font-size:0.9rem;">${item.caption}</p>
            `;
        } else if (item.type === 'comparison') {
            const flexDiv = document.createElement('div');
            flexDiv.style.cssText = "display: flex; gap: 0.5rem;";
            item.images.forEach(img => {
                flexDiv.innerHTML += `<img src="${img.src}" alt="${img.alt}" style="width: 48%; border-radius: 8px;">`;
            });
            div.appendChild(flexDiv);

            const p = document.createElement('p');
            p.style.cssText = "text-align:center; margin-top:0.5rem; font-size:0.9rem;";
            p.textContent = item.caption;
            div.appendChild(p);
        }

        grid.appendChild(div);
    });
}

function renderCitation() {
    const block = document.querySelector('.citation-block code');
    block.textContent = projectData.citation;
}

function initInteractions() {
    const copyBtn = document.querySelector('.copy-btn');
    const citationBlock = document.querySelector('.citation-block code');

    if (copyBtn && citationBlock) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(citationBlock.textContent);
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.style.backgroundColor = 'var(--primary)';
                copyBtn.style.color = '#000';

                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '';
                    copyBtn.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    }
}
