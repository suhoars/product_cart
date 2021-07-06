import React, { ReactElement } from "react";


export interface IBadge {
  backroundColor: string;
  color: string;
  children: React.ReactNode;
}

export interface IButton {
  backroundColor: string;
  color: string;
  children: string;
}
