export const sections = {
	basics: { label: 'Grundlagen', href: '/intro/was-ist-linux/' },
	administration: { label: 'Administration', href: '/administration/' },
};

export function getCourseSection(path: string): keyof typeof sections | undefined {
	const prefix = path.replace(/^\//, '').split('/')[0];
	if (prefix === 'intro' || prefix === 'basics') return 'basics';
	if (prefix === 'administration') return 'administration';
}
