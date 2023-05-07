// https://www.typescriptlang.org/play?#code/C4TwDgpgBAMghgZ2AFXNAvFA3gWAFBSFQAUcATmQFxQB2ArgLYBGEZA2gLoCU19zr+AL74AxgHsaSKABtEwavCSpIUTKQpdVAPmz4iUMhGB0yNKOXYWAdNIg0A5sAAWUALRQAjBwDcQ-PlAVAAVDSBoAE2UMXQIiAB5kLXUqKGROABooAEtgCAZqZB5Uzj88cUlgKDBQu3DqEIgwyLRVEgtMnLzNdB1cWMJrOkknLIAzYGJOhi5ffoMjEzMLWeE8fFGhkWAsiSgGLIAPBMyANSSLDwKM8woAJmoTziLiZAAfE65OGP1yqVsHZytC42OyOFw6Cy3EEAlwAfhuZA80LBUGokORzlm+j0RF+lQs1Be70+HFaJTmozEZBItkqWVaAAZvNkoHEZKDMdkANRczR9fT6MZtChI-4onRZTTWMB0BBOZIeNhZbg4gXZUbCshQsWAiVSihWGVy5K3JUquarfSGYymBErfx4DY0LY7MziIYTAlQJBkLIOJ7fIjWxYIjFOe1rR2bba7UZ+8IASQiECOiWSVw4HVy+VSRT4LDIr1odGk0kDhCFySs8ZTAHlRpNs5oAIToTCuDx81UC4O26w1g71xtdLFEQRQCDSBDQflq+Y2sz0UujwirVbraOu73SLIiCDp4v8diZ73AcjAJPhFO8RgFzK1S8p2E3o9duaVwIQMQah-Jg6qNsoAAcnzVggLfOd5xDawEB3PdiCQc9HwOe8ImQrhu3HSdp3LHsFj7A1YN3fdELIC8-xmTChCAA

type LastType = {
  (arr: number[]): number;
};
const last: LastType = (arr) => {
  return arr[arr.length - 1];
};

type PrependType = {
  <T>(arr: T[], item: T): T[];
};
const prepend: PrependType = (arr, item) => {
  arr.unshift(item);
  return arr;
};

function mix<T, V>(arr1: T[], arr2: V[]): (T | V)[] {
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;

  const arr: (T | V)[] = [];
  for (let i = 0; i < length; i++) {
    if (arr1.length > i) arr.push(arr1[i]);
    if (arr2.length > i) arr.push(arr2[i]);
  }
  return arr;
}

function count(arr: string[]) {
  return arr.length;
}

function findIndex<T>(arr: T[], item: T): number | null {
  if (arr.indexOf(item) !== -1) {
    return arr.indexOf(item);
  } else {
    return null;
  }
}

function slice(arr: number[], startIndex: number, endIndex?: number) {
  if (typeof endIndex === "number") {
    return arr.slice(startIndex, endIndex);
  } else {
    return arr.slice(startIndex);
  }
}
