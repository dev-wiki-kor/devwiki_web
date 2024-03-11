'use client'

import testAction from '@/features/actions/test'

export default function Test() {
	const testHandler = async () => {
		await testAction()
	}
	return <button onClick={testHandler}>test</button>
}
