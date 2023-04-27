import { getAuth } from '@firebase/auth'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { match } from 'ts-pattern'

export type Provider = 'github' | 'google'

export function useFirebase() {
  const user = useCurrentUser()
  const auth = ref()
  const githubProvider = new GithubAuthProvider()
  const googleProvider = new GoogleAuthProvider()

  const router = useRouter()

  const hasUser = user.value !== undefined

  /**
   * ログイン
   * @param provider
   */
  async function login(provider: Provider) {
    const authProvider = match(provider)
      .with('github', () => githubProvider)
      .with('google', () => googleProvider)
      .exhaustive()
    auth.value = getAuth()

    signInWithPopup(auth.value, authProvider)
      .then((result) => {
        const credential = match(provider)
          .with('github', () => GithubAuthProvider.credentialFromResult(result))
          .with('google', () => GoogleAuthProvider.credentialFromResult(result))
          .exhaustive()

        const token = credential?.accessToken
        const user = result.user
      })
      .catch((err) => {
        alert('Something went wrong!')
      })

    router.push('/')
  }

  /**
   * ログアウト
   */
  function logout() {
    signOut(auth.value)
  }

  return { hasUser, login, logout }
}
