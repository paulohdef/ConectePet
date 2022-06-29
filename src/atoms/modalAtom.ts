
import { Tutores, Vacinas } from '@/typing'
import { atom } from 'recoil'
 

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const modalVacinasState = atom({
  key: 'modalVacinasState',
  default: false,
})

export const modalTutoresState = atom({
  key: 'tutoresState',
  default: false,
})

export const vacinasState = atom<Vacinas | null>({
  key: 'vacinasState',
  default: null,
})




 