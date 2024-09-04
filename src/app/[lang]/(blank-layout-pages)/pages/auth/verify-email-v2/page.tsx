// Component Imports
import VerifyEmailV2 from '@views/pages/auth/VerifyEmailV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const VerifyEmailV2Page = () => {
  // Vars
  const mode = getServerMode()

  return <VerifyEmailV2 mode={mode} />
}

export default VerifyEmailV2Page
