import React, { useCallback, useMemo, useRef } from 'react';
import { useLocalStorage } from 'react-use';
import { debounce } from 'lodash';
import { useRefState } from 'easy-email-editor';

const defaultPresetColor: string[] = [
  '#002c5f',
  '#e4dcd3',
  '#f6f3f2',
  '#a36b4f',
  '#00aad2',
  '#00aad2',
  '#e63312',
  '#aacae6',
  '#000000',
];

const CURRENT_COLORS_KEY = 'CURRENT_COLORS_KEY';
const MAX_RECORD_SIZE = 20;

export const PresetColorsContext = React.createContext<{
  colors: string[];
  addCurrentColor: (color: string) => void;
}>({
  colors: [],
  addCurrentColor: () => {},
});

export const PresetColorsProvider: React.FC<{
  children: React.ReactNode | React.ReactElement;
}> = props => {
  const [currentColors, setCurrentColors] = useLocalStorage<string[]>(
    CURRENT_COLORS_KEY,
    defaultPresetColor,
  );
  const currentColorsRef = useRefState(currentColors);

  const colorDivRef = useRef(document.createElement('div'));

  const addCurrentColor = useCallback(
    debounce((newColor: string) => {
      colorDivRef.current.style.color = '';
      colorDivRef.current.style.color = newColor;
      if (colorDivRef.current.style.color) {
        if (currentColorsRef.current!.includes(newColor)) return;
        const newColors = [...new Set([...currentColorsRef.current!, newColor])]
          .filter(Boolean)
          .slice(-MAX_RECORD_SIZE);

        setCurrentColors(newColors);
      }
    }, 500),
    [currentColorsRef, setCurrentColors],
  );

  const value = useMemo(() => {
    return {
      colors: currentColors!,
      addCurrentColor,
    };
  }, [addCurrentColor, currentColors]);

  return useMemo(() => {
    return (
      <PresetColorsContext.Provider value={value}>
        {props.children}
      </PresetColorsContext.Provider>
    );
  }, [props.children, value]);
};
