const fs = require('fs');

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function tailwindConfig() {
  const tokens = JSON.parse(fs.readFileSync('./.flek/tokens.json', {encoding:'utf8', flag:'r'}));

  const tailwind = {
    colors: {},
    spacing: {},
    borderRadius: {},
    borderWidth: {},
    boxShadow: {},
  };
  Object.keys(tokens.color).forEach((key) => {
    let parent = tailwind.colors;
    const nested = key.split('/');
    for (let i = 0; i < nested.length; i++) {
      if (!parent[nested[i]]) {
        if (i == nested.length - 1) parent[nested[i]] = tokens.color[key].value;
        else parent[nested[i]] = {};
      }
      parent = parent[nested[i]];
    }
  });
  Object.keys(tokens.spacing).forEach((key) => {
    let parent = tailwind.spacing;
    const nested = key.split('/');
    for (let i = 0; i < nested.length; i++) {
      if (!parent[nested[i]]) {
        if (i == nested.length - 1) parent[nested[i]] = `${tokens.spacing[key].value}px`;
        else parent[nested[i]] = {};
      }
      parent = parent[nested[i]];
    }
  });
  Object.keys(tokens.borderRadius).forEach((key) => {
    let parent = tailwind.borderRadius;
    const nested = key.split('/');
    for (let i = 0; i < nested.length; i++) {
      if (!parent[nested[i]]) {
        if (i == nested.length - 1) parent[nested[i]] = `${tokens.borderRadius[key].value}px`;
        else parent[nested[i]] = {};
      }
      parent = parent[nested[i]];
    }
  });
  Object.keys(tokens.borderWidth).forEach((key) => {
    let parent = tailwind.borderWidth;
    const nested = key.split('/');
    for (let i = 0; i < nested.length; i++) {
      if (!parent[nested[i]]) {
        if (i == nested.length - 1) parent[nested[i]] = `${tokens.borderWidth[key].value}px`;
        else parent[nested[i]] = {};
      }
      parent = parent[nested[i]];
    }
  });
  Object.keys(tokens.boxShadow).forEach((key) => {
    const value = tokens.boxShadow[key];
    const rgb = hexToRgb(value.color);

    let parent = tailwind.boxShadow;
    const nested = key.split('/');
    for (let i = 0; i < nested.length; i++) {
      if (!parent[nested[i]]) {
        if (i == nested.length - 1)
          parent[
            nested[i]
          ] = `${value.x}px ${value.y}px ${value.blur}px ${value.spread}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${value.opacity})`;
        else parent[nested[i]] = {};
      }
      parent = parent[nested[i]];
    }
  });
  return tailwind;
}

const tailwindPlugin = function({ addComponents }) {
  const tokens = JSON.parse(fs.readFileSync('./.flek/tokens.json', {encoding:'utf8', flag:'r'}));
  let typographies = {};

  Object.keys(tokens.typography).forEach((key) => {
    const name = '.text-' + key.replaceAll('/', '-');
    const value = tokens.typography[key];

    typographies[name] = {
      fontFamily: value.family,
      fontSize: `${value.size}px`,
      fontWeight: value.weight,
      letterSpacing: `${value.letterSpacing}px`,
      marginBottom: `${value.paragraphSpacing}px;`,
      ...(
        value.lineHeight.unit === 'AUTO'
        ? {}
        : { lineHeight: `${value.lineHeight.value}px` }
      ),
    };
  });

  addComponents(typographies);
}

module.exports = {
  tailwindConfig,
  tailwindPlugin,
};
