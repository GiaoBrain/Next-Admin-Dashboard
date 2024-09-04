'use client'

// Next Imports
import dynamic from 'next/dynamic'

// Type Imports
import type { EditorProps } from 'react-draft-wysiwyg'

//! To avoid 'Window is not defined' error
const ReactDraftWysiwyg = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false
})

export default ReactDraftWysiwyg
