import { createContext, useRef, useState } from "react";

export const XOContext = createContext({
  myx: [],
  myo: [],
  next: 'X'
});
