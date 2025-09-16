import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UiState {
  activeSection: string
  showContact: boolean
}

const initialState: UiState = {
  activeSection: '',
  showContact: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload
    },
    toggleContact: (state) => {
      state.showContact = !state.showContact
    },
    setShowContact: (state, action: PayloadAction<boolean>) => {
      state.showContact = action.payload
    },
  },
})

export const { setActiveSection, toggleContact, setShowContact } = uiSlice.actions
export default uiSlice.reducer