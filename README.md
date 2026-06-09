# Quantum Computing Stack

Deep technical documentation of the full quantum computing hardware and software stack — from Shor's algorithm compilation down to the 15 mK mixing chamber of a dilution refrigerator.

Tracks the [ecdsa.fail](https://www.ecdsa.fail) frontier: live benchmark metrics for secp256k1 elliptic curve discrete logarithm breaking via fault-tolerant quantum circuits.

## Stack Layers

| Layer | Topic | Key Insight |
|-------|-------|-------------|
| Algorithm | Shor's Algorithm & Crypto Compilation | ~2,000 logical qubits × 1,000 physical each |
| Optimization | Qutrits, Qudits & Gate Squashing | Higher states slash Toffoli counts |
| Error Correction | Topological QEC & Leakage Reduction | Surface Code d=27, MWPM decoding in <1µs |
| Hardware Rack | Room-Temperature Electronics | FPGA arrays, RFSoC, AWG synthesis |
| Control | Pulse Physics & RFSoC | GRAPE-optimized microwave envelopes |
| Microwave Wiring | Signal Conditioning | 60 dB intentional attenuation cascade |
| Readout | QND Measurement | Dispersive shift, TWPA + HEMT chain, ~99.5% fidelity |
| Vacuum | Ultra-High Vacuum | <10⁻⁸ mbar with hundreds of wire feedthroughs |
| Cryogenics | Dilution Refrigerators | He-3/He-4 mixing, 15 mK base, 3-day cooldown |
| Shielding | Magnetic & Radiation Isolation | μ-metal, Cryoperm, Eccosorb IR filters |
| Qubit | Transmon Physics | Al/AlOx/Al Josephson junctions, EJ/EC ≈ 50 |
| Decoherence | Microscopic Mechanisms | TLS defects, quasiparticle poisoning, 1/f flux noise |
| Network | Quantum Interconnects | Electro-optic transduction, microwave ↔ optical |

## Interactive Features

- **Dilution Refrigerator Schematic** — hover thermal stages (300K → 15mK) to highlight coupled system layers
- **Live Telemetry** — real-time ecdsa.fail benchmark metrics (peak qubits, Toffoli count, best score)
- **Interactive Components** — transmon Bloch sphere, QEC surface code grid, timeline

## Pages

```
/                       Introduction & full stack overview
/physics                Transmon physics & Josephson junctions
/decoherence            Microscopic decoherence mechanisms
/cryogenics             Dilution refrigerators & thermodynamics
/microwave-wiring       Signal conditioning & attenuation
/classical-control      Room-temperature electronics
/control                Pulse physics & FPGA synthesis
/vacuum                 Ultra-high vacuum systems
/interconnects          Quantum interconnects & transduction
/qec                    Quantum error correction
/qudits                 Qutrits & gate optimization
/compilation            Shor's algorithm compilation
/readout                QND measurement & discrimination
/threat-model           Cryptographic threat analysis
/neutral-atoms          Neutral atom quantum computing
/trapped-ions           Trapped ion quantum computing
/photonic-computing     Photonic quantum computing
/breakthroughs          Timeline of quantum breakthroughs
```

## Development

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output to dist/
```

Built with [Astro](https://astro.build). Math rendering via [MathJax](https://www.mathjax.org/).
