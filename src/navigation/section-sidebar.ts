import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { getCourseSection, sections } from './sections';

export const onRequest = defineRouteMiddleware(({ locals }) => {
	const route = locals.starlightRoute;
	const section = getCourseSection(route.id);
	if (!section) return;

	const group = route.sidebar.find(
		(entry) => entry.type === 'group' && entry.label === sections[section].label,
	);
	if (group?.type === 'group') route.sidebar = group.entries;

	if (route.pagination.prev && getCourseSection(route.pagination.prev.href) !== section) {
		route.pagination.prev = undefined;
	}
	if (route.pagination.next && getCourseSection(route.pagination.next.href) !== section) {
		route.pagination.next = undefined;
	}
});
