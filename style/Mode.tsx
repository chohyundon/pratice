type LightMode = {
  background: string;
  color: string;
};

type DarkMode = {
  background: string;
  color: string;
};

type Theme = {
  light: LightMode;
  dark: DarkMode;
};

export const Mode: Theme = {
  light: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#000",
    color: "#fff",
  },
};
