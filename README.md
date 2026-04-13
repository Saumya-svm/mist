# MIST: Multilingual Incidental Dataset for Scene Text Detection

**Authors:** Saumya Mundra, Ajoy Mondal, C.V. Jawahar  
**Affiliation:** CVIT, IIIT Hyderabad, India

## Abstract

Scene text detection has progressed rapidly, largely driven by curated datasets and benchmarks. However, many of these have reached evaluation saturation and are heavily biased toward focused scenes, limiting their effectiveness in real-world environments where detection is hindered by environmental factors. To address this, we introduce **MIST** -- a **M**ultilingual **I**ncidental **S**cene **T**ext dataset featuring diverse text instances across 11 languages. MIST provides language, transcription, legibility, and fine-grained polygon-shaped annotations across 12K scene images and 600K word-level text instances. Images are captured along roads using a GoPro mounted on a moving car to capture real-world complexities, ensuring the scenes are **incidental** rather than deliberately framed. MIST establishes a new challenging benchmark to enable robust evaluation of scene text detection methods in real-world scenarios.

## The MIST Dataset

**MIST** comprises **12K scene images** containing **576K text instances** across **11 scripts** (English, Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Oriya, Punjabi, Tamil, and Telugu). Each image is high-resolution (1920×1080).

To ensure temporal and regional diversity, we enforced per-region and per-sequence quotas and sampled uniformly over time. The dataset is split into training, validation, and testing (benchmark) sets in a 4:1:1 ratio.

MIST is designed to be highly **incidental**. We quantify this using metrics like \(M_3\) (average area of text instance relative to image), where MIST shows significantly smaller text instances compared to existing focused datasets, mirroring real-world complexity.

**Dataset URL:** [https://cvit.iiit.ac.in/images/datasets/mist/mist.zip](https://cvit.iiit.ac.in/images/datasets/mist/mist.zip)

## Characteristics

MIST displays a **well-balanced** and **dense** text distribution compared to existing datasets. With M₁ = 48, MIST has approximately **4× the text density** of ICDAR15 and **6× that of COCO-Text**.

The M₃ metric reveals MIST's highly incidental nature. MIST's average M₃ is **15-20× smaller** than focused datasets and **4× smaller** than incidental counterparts, indicating significantly smaller text instances that mirror real-world complexity.

## Benchmark Results

Benchmarking results on MIST. DP-DETR achieves the best performance, but overall scores suggest significant room for improvement in handling incidental scenes.

| Model   | Pretrain | Precision | Recall | F-Measure |
| ------- | -------- | --------- | ------ | --------- |
| DP-DETR | Syn      | 69.61     | 57.04  | 62.70     |
| TBPN    | MLT      | 70.87     | 47.75  | 57.06     |
| MixNet  | Syn      | 73.48     | 45.59  | 56.27     |
| DB++    | Syn      | 72.84     | 39.73  | 51.42     |

## Citation

```bibtex
@article{mist2025,
  title={MIST: Multilingual Incidental Dataset for Scene Text Detection},
  author={Mundra, Saumya and Mondal, Ajoy and Jawahar, C.V.},
  journal={WACV},
  year={2026}
}
```
