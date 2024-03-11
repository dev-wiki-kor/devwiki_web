import { test2Api } from '@/features/Test/api'

export default async function Date2() {
	const res = await test2Api()

	return <div>date2</div>
}
