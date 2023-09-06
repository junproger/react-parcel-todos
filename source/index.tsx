import { createRoot } from 'react-dom/client';

import { container } from './constants/container';

import { App } from './components/app/app';

const ROOT = createRoot(container as HTMLElement);

ROOT.render(<App />);
