export type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = ClassValue[];

function toVal(mix: ClassValue) {
  let k,
    y,
    str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
    return str;
  }

  if (typeof mix !== 'object') {
    return str;
  }

  if (Array.isArray(mix)) {
    for (k = 0; k < mix.length; k++) {
      if (mix[k] && (y = toVal(mix[k]))) {
        str && (str += ' ');
        str += y;
      }
    }

    return str;
  }

  for (k in mix) {
    if (mix?.[k]) {
      str && (str += ' ');
      str += k;
    }
  }

  return str;
}

export default function cx(...inputs: ClassValue[]) {
  let i = 0,
    tmp,
    x,
    str = '';

  while (i < inputs.length) {
    if ((tmp = inputs[i++]) && (x = toVal(tmp))) {
      str && (str += ' ');
      str += x;
    }
  }

  return str;
}
