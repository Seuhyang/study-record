interface LocalStorageAPI<T> {
  [key: string]: T;
}
class LocalStorage<T> {
  private storage: LocalStorageAPI<T> = {};

  setItem(key: string, value: T) {
    this.storage[key] = value;
  }

  getItem(key: string): T {
    return this.storage[key];
  }

  clearItem(key: string) {
    delete this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}

const miniLocalStorage = new LocalStorage<string>();
miniLocalStorage.setItem("hi", "nico");
miniLocalStorage.setItem("ping", "pong");
miniLocalStorage.getItem("ping");
miniLocalStorage.clearItem("hi");
miniLocalStorage.clear();

/**
 * - Syntax getCurrentPosition
 * getCurrentPosition(success)
 * getCurrentPosition(success, error)
 * getCurrentPosition(success, error, options)
 *
 * - Syntax watchPosition
 * watchPosition(success)
 * watchPosition(success, error)
 * watchPosition(success, error, options)
 *
 * success, error (Optional), options (Optional)

 *
 */

abstract class GeolocationAPI {
  getCurrentPosition(
    successFn: IPositionCallback,
    errorFn?: IGeolocationPositionError,
    options?: IGeolocationOptions
  ) {}
  watchPosition(
    successFn: IPositionCallback,
    errorFn?: IGeolocationPositionError,
    options?: IGeolocationOptions
  ) {}
  clearWatch(id: number) {}
}

// position
interface IPositionCallback {
  (position: IGeolocationPosition): void;
}
interface IGeolocationPosition {
  coords: IGeolocationCoordinates;
  timestamp: number;
}
interface IGeolocationCoordinates {
  readonly latitude: number;
  readonly loongitude: number;
  readonly altitude?: number;
  readonly accuracy: number;
  readonly altitudeAccuracy?: number;
  readonly heading?: number;
  readonly speed?: number;
}
// error
interface IGeolocationPositionError {
  readonly code: ECodeError;
  readonly message: string;
}

enum ECodeError {
  PERMISSION_DENIED = 1,
  POSITION_UNAVAILABLE = 2,
  TIMEOUT = 3,
}

// options
interface IGeolocationOptions {
  maximumAge: number;
  timeout: number;
  enableHighAccuracy: boolean;
}

class MiniGeolocation implements GeolocationAPI {
  getCurrentPosition(
    successFn: IPositionCallback,
    errorFn?: IGeolocationPositionError,
    options?: IGeolocationOptions
  ) {
    let val = "";
    if (successFn) val = "in success!" + successFn + " !";
    if (errorFn) val += " in error!";
    if (options) val += " in options!";
    return val;
  }

  watchPosition(
    successFn: IPositionCallback,
    errorFn?: IGeolocationPositionError,
    options?: IGeolocationOptions
  ) {
    let num = 0;
    if (successFn) {
      console.log(successFn);
      num++;
    }
    if (errorFn) num++;
    if (options) num++;
    return num.toString();
  }
  clearWatch(id: number) {}
}

const geolocation = new MiniGeolocation();
