import { Routes, Route } from 'react-router-dom'
import App from './App'
import { ColorsSurfaces } from './pages/colors-surfaces'
import { ColorsInk } from './pages/colors-ink'
import { ColorsAccents } from './pages/colors-accents'
import { TypeDisplay } from './pages/type-display'
import { TypeScale } from './pages/type-scale'
import { TypeMono } from './pages/type-mono'
import { SpacingScale } from './pages/spacing-scale'
import { EffectsGlow } from './pages/effects-glow'
import { EffectsScanlines } from './pages/effects-scanlines'
import { ComponentsButtons } from './pages/components-buttons'
import { ComponentsInputs } from './pages/components-inputs'
import { ComponentsCards } from './pages/components-cards'
import { ComponentsTerminal } from './pages/components-terminal'
import { ComponentsBadges } from './pages/components-badges'
import { BrandLogotype } from './pages/brand-logotype'
import { BrandHero } from './pages/brand-hero'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/colors/surfaces" element={<ColorsSurfaces />} />
      <Route path="/colors/ink" element={<ColorsInk />} />
      <Route path="/colors/accents" element={<ColorsAccents />} />
      <Route path="/type/display" element={<TypeDisplay />} />
      <Route path="/type/scale" element={<TypeScale />} />
      <Route path="/type/mono" element={<TypeMono />} />
      <Route path="/spacing/scale" element={<SpacingScale />} />
      <Route path="/effects/glow" element={<EffectsGlow />} />
      <Route path="/effects/scanlines" element={<EffectsScanlines />} />
      <Route path="/components/buttons" element={<ComponentsButtons />} />
      <Route path="/components/inputs" element={<ComponentsInputs />} />
      <Route path="/components/cards" element={<ComponentsCards />} />
      <Route path="/components/terminal" element={<ComponentsTerminal />} />
      <Route path="/components/badges" element={<ComponentsBadges />} />
      <Route path="/brand/logotype" element={<BrandLogotype />} />
      <Route path="/brand/hero" element={<BrandHero />} />
    </Routes>
  )
}
