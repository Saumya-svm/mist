document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.querySelector('.copy-btn');
    const citationBlock = document.querySelector('.citation-block code');

    if (copyBtn && citationBlock) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(citationBlock.textContent);
                
                // Visual feedback
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
                copyBtn.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '';
                    copyBtn.style.borderColor = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
                copyBtn.textContent = 'Error';
            }
        });
    }
});
