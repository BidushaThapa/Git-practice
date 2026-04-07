// store/farmerStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useFarmerStore = create(
  persist(
    (set) => ({
      ward: '',
      season: '',
      landSize: '',
      landUnit: 'Ropani',
      selectedCrop: '',

      setWard: (ward) => set({ ward }),
      setSeason: (season) => set({ season }),
      setLandSize: (landSize) => set({ landSize }),
      setLandUnit: (landUnit) => set({ landUnit }),
      setSelectedCrop: (crop) => set({ selectedCrop: crop }),

      resetFarmer: () => set({
        ward: '', season: '', landSize: '',
        landUnit: 'Ropani', selectedCrop: ''
      }),
    }),
    { name: 'farmer-data' } // this is the localStorage key
  )
)