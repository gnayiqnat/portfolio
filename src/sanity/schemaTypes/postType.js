import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	icon: DocumentTextIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		}),
		defineField({
			name: 'author',
			type: 'reference',
			to: { type: 'author' },
		}),
		defineField({
			name: 'mainImage',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
				}),
			],
		}),
		defineField({
			name: 'categories',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
		}),
		defineField({
			name: 'publishedAt',
			type: 'datetime',
		}),
		defineField({
			name: 'body',
			type: 'blockContent',
		}),
		defineField({
			name: 'metaTitle',
			title: 'Meta Title',
			type: 'string',
			description:
				'Title used for browser tabs & search results (60 chars ideal).',
		}),
		defineField({
			name: 'metaDescription',
			title: 'Meta Description',
			type: 'text',
			rows: 3,
			description: 'Description for search engines (150-160 chars).',
		}),
		defineField({
			name: 'shareGraphic',
			title: 'Share Graphic',
			type: 'image',
			description: 'Open Graph image (1200x630 px recommended).',
		}),
	],
	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
});
