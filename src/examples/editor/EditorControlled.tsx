'use client'

// React Imports
import { useState } from 'react'

// Third-party Imports
import { EditorState } from 'draft-js'

// Styled Component Import
import AppReactDraftWysiwyg from '@/libs/styles/AppReactDraftWysiwyg'

const EditorControlled = () => {
  // States
  const [value, setValue] = useState(EditorState.createEmpty())

  return <AppReactDraftWysiwyg editorState={value} onEditorStateChange={data => setValue(data)} />
}

export default EditorControlled
