SPED Fiscal Tools is a Visual Studio Code extension that delivers advanced, structured syntax highlighting for SPED Fiscal (EFD ICMS/IPI) files.

Built for accountants, tax analysts and developers who work daily with large, dense SPED files and need speed, clarity and precision.

## 🛠 Installation

1. Open Visual Studio Code
2. Go to Extensions
3. Search for **SPED Fiscal Tools**
4. Click Install
5. Press `Ctrl + Shift + P`
6. Search for **Preferences: Color Theme**
7. Select **SPED Fiscal Dark**

You're ready to go.

---

## ✨ What It Does

SPED files are structured, but visually chaotic.

SPED Fiscal Tools transforms raw text into a visually organized document by applying a carefully designed color hierarchy that mirrors real-world auditing flow.

Instead of reading character by character, you recognize structure instantly.

---

## 🎨 Visual Color Legend (SPED Fiscal Dark)

The theme follows a strict cognitive hierarchy — designed for fast auditing and multitasking support environments.

### 🟣 Structure

- **Pipes (`|`)** → Strong purple for vertical visual parsing
- **Block 0** → Light violet
- **Block C** → Bright blue
- **Block D** → Soft green
- **Block 9** → Orange
- **Records (C100, D700, etc.)** → Highlighted blue (bold)
- **Control registers (9900, 9990, 9999)** → Emphasized yellow

---

### 🟡 Document Identification

These fields share a unified visual identity for instant recognition:

- Model
- Series
- Document Number
- Access Key (44 digits) → Bold + underline

When you see this color group, you immediately know you're validating the correct document.

---

### 🟢 Financial Values

- **Total document value (VL_DOC / NF value)** → Bright green
  - Always dominant
  - Always easy to spot

---

### 🔴 Fiscal Classification

- **CFOP** → Strong red (bold)
- **CST** → Orange

Nature of operation stands out immediately.

---

### 🧾 Registration & Identification Fields

- **CNPJ** → Bright green (bold)
- **CPF** → Light green
- **State Registration (IE)** → Green
- **Profile Type** → Yellow

---

### 📅 Dates

- **Document dates** → Cyan
- **Period dates** → Bold blue
- **Empty date fields** → Italic indigo

Dates are visually distinct but never overpower financial data.

---

## 💰 Tax Identity System

Each tax has its own color family.

The rule is simple:

> You identify the tax first, then the field type (base, rate, value).

### 🔵 ICMS

- Base → Light blue
- Rate → Medium blue
- Value → Strong blue (bold)

### 🔷 ICMS ST

- Base → Deep blue
- Rate → Stronger blue
- Value → Dark blue (bold)

### 🟦 ICMS ST (D730 specific)

- Cyan-toned highlight for differentiation within apuração context

### 🟢 PIS

- Base → Light green
- Rate → Bright green
- Value → Teal green (bold)

### 🟡 COFINS

- Base → Lime
- Rate → Neon lime
- Value → Lime (bold)

### 🟣 IPI

- Base → Soft purple
- Rate → Medium purple
- Value → Deep purple (bold)

All taxes are clearly distinguishable — without overpowering the total document value.

---

## 🧠 Designed for Real Auditing Flow

The visual logic follows how professionals actually read SPED files:

1. Identify the record (C100, D700, etc.)
2. Validate model, series, number and key
3. Confirm total value
4. Check CFOP
5. Analyze taxes

## The theme supports this exact cognitive order.

## 👨‍💻 Author

Developed by **Adrian Gabriel Cirino**.
