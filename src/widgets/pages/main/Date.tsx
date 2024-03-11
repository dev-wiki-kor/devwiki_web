import { testAPI } from '@/features/Test/api'

export default async function Date() {
	const res = await testAPI()

	if (!res.isSucceed) return null
	return (
		<div>
			date
			{res.body.dateTime}
		</div>
	)
}
