/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SmoothScrollProvider } from './components/ui/SmoothScrollProvider.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScrollProvider>
      <App /> 
    </SmoothScrollProvider>
  </StrictMode>,
)
