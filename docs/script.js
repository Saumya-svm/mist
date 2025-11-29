const projectData = {
    title: "MIST: Multilingual Incidental Dataset for Scene Text Detection",
    authors: [
        { name: "First Author", affiliation: 1 },
        { name: "Second Author", affiliation: 2 }
    ],
    affiliations: [
        { id: 1, name: "Institution One" },
        { id: 2, name: "Institution Two" }
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
            },
            {
                type: "image",
                src: "images/result_vis.png",
                alt: "Visual Results",
                caption: "Visual detection results on MIST"
            },
            {
                type: "comparison",
                images: [
                    { src: "images/mlt17.png", alt: "MLT17 Distribution" },
                    { src: "images/totaltext.png", alt: "TotalText Distribution" }
                ],
                caption: "Distribution comparisons (MLT17 vs Total-Text)"
            }
        ]
    },
    citation: `@article{mist2025,
  title={MIST: Multilingual Incidental Dataset for Scene Text Detection},
  author={First Author and Second Author},
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
