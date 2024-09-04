// Component Imports
import ResetPasswordV2 from '@views/pages/auth/ResetPasswordV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const ResetPasswordV2Page = () => {
  // Vars
  const mode = getServerMode()

  return <ResetPasswordV2 mode={mode} />
}

export default ResetPasswordV2Page
