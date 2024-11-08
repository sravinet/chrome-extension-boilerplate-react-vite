import { useEffect } from 'react';
import { Button } from '@extension/ui';
import { useStorage } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';

export default function App() {
  const theme = useStorage(exampleThemeStorage);
  const isLight = theme === 'light';
  const logo = chrome.runtime.getURL(isLight ? 'logo_horizontal.svg' : 'logo_horizontal_dark.svg');

  useEffect(() => {
    console.log('content ui loaded');
  }, []);

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded px-2 py-1 ${
        isLight ? 'bg-blue-100' : 'bg-gray-800'
      }`}>
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        <div className={`flex gap-1 ${isLight ? 'text-blue-500' : 'text-blue-300'}`}>
          Edit <strong className={isLight ? 'text-blue-700' : 'text-blue-100'}>pages/content-ui/src/app.tsx</strong> and
          save to reload.
        </div>
      </div>
      <Button theme={theme} onClick={exampleThemeStorage.toggle}>
        Toggle Theme
      </Button>
    </div>
  );
}
