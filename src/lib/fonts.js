// src/lib/fonts.js
import { Anton, Architects_Daughter, Geologica } from 'next/font/google';

export const anton = Anton({ subsets: ["latin"], weight: "400" });
export const architectsDaughter = Architects_Daughter({ subsets: ["latin"], weight: "400" });
export const geologica = Geologica({ subsets: ["latin"], weight: ["300", "400"] });
