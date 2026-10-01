---
language:
- en
- bn
- gu
- hi
- kn
- ml
- mr
- or
- pa
- ta
- te
license: other
task_categories:
- object-detection
- image-to-text
tags:
- scene-text
- text-detection
- multilingual
- indic-languages
- polygon-annotations
pretty_name: MIST
size_categories:
- 10K<n<100K
---

# MIST: Multilingual Incidental Dataset for Scene Text Detection

**Authors:** Saumya Mundra, Ajoy Mondal, C.V. Jawahar  
**Affiliation:** CVIT, IIIT Hyderabad, India

## Abstract

Scene text detection has progressed rapidly, largely driven by curated datasets and benchmarks. However, many of these have reached evaluation saturation and are heavily biased toward focused scenes, limiting their effectiveness in real-world environments where detection is hindered by environmental factors. MIST is a **M**ultilingual **I**ncidental **S**cene **T**ext dataset designed for this setting. It contains incidental road-scene imagery with multilingual text and fine-grained polygon annotations.

The images were captured along roads using a GoPro mounted on a moving car, preserving real-world scale, viewpoint, motion blur, occlusion, and environmental variation rather than deliberately framing text.

## The MIST Dataset

MIST comprises approximately **12K scene images** and hundreds of thousands of word-level text instances across 11 scripts: English, Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Oriya, Punjabi, Tamil, and Telugu. Each image is high-resolution (1920×1080).

To ensure temporal and regional diversity, we enforced per-region and per-sequence quotas and sampled uniformly over time. The dataset is split into training, validation, and testing (benchmark) sets in a 4:1:1 ratio.

MIST is designed to be highly **incidental**. We quantify this using metrics like \(M_3\) (average area of text instance relative to image), where MIST shows significantly smaller text instances compared to existing focused datasets, mirroring real-world complexity.

## Repository contents

The Hugging Face repository contains the extracted dataset files:

- `mist_train/`: training images and LabelMe-style JSON ground truth.
- `mist_test/final/`: final benchmark images and LabelMe-style JSON ground truth.

Each JSON annotation contains polygon vertices, transcription labels, script/language metadata, legibility fields, and image dimensions. Polygon coordinates are stored in the original 1920×1080 image coordinate system.

## Dataset URL

- Hugging Face: https://huggingface.co/datasets/Saumya-Mundra/MIST-Dataset
- CVIT mirror: https://cvit.iiit.ac.in/images/datasets/mist/mist.zip

## Intended use

MIST is intended for research and development in multilingual scene-text detection, transcription, script identification, and robustness to incidental imagery. The benchmark should be used with the provided polygon annotations and care should be taken not to mix benchmark images into training.

## Limitations and considerations

The data is collected along roads and may reflect the geographic, temporal, and capture conditions of those routes. Text may be small, blurred, occluded, oblique, partially visible, or marked as illegible/do-not-care. Users should inspect the annotation fields before converting the data to a task-specific format.

## License and attribution

The repository is released for research use subject to the terms and permissions specified by the MIST authors and the original data sources. Please check with the authors before commercial redistribution or redistribution of raw imagery.

If you use MIST, please cite the accompanying paper:

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
