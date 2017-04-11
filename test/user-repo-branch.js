/* eslint-disable id-length, no-shadow */
import test from 'ava'
import userRepoBranch from '../lib/user-repo-branch'

test('https://github.com/akhodakivskiy/VimFx', (t) => {
  t.deepEqual(userRepoBranch('https://github.com/akhodakivskiy/VimFx'), {
    user: 'akhodakivskiy',
    repo: 'VimFx',
    branch: 'master',
    href: 'https://github.com/akhodakivskiy/VimFx/tree/master'
  })
})

test('https://github.com/sindresorhus/pageres/commit/663be15acb3dd2eb0f71b1956ef28c2cd3fdeed0', (t) => {
  t.deepEqual(userRepoBranch('https://github.com/sindresorhus/pageres/commit/663be15acb3dd2eb0f71b1956ef28c2cd3fdeed0'), {
    user: 'sindresorhus',
    repo: 'pageres'
  })
})

test('https://github.com/mozilla/web-ext/releases/new', (t) => {
  t.deepEqual(userRepoBranch('https://github.com/mozilla/web-ext/releases/new'), {
    user: 'mozilla',
    repo: 'web-ext'
  })
})

test('https://github.com/mozilla/web-ext/issues?utf8=%E2%9C%93&q=is%3Aclosed%20label%3A%22needs%3A%20docs%22%20', (t) => {
  t.deepEqual(userRepoBranch('https://github.com/mozilla/web-ext/issues?utf8=%E2%9C%93&q=is%3Aclosed%20label%3A%22needs%3A%20docs%22%20'), {
    user: 'mozilla',
    repo: 'web-ext'
  })
})
