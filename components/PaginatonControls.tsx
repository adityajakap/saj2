'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

export function PaginationControls({
	currentPage,
	totalPages,
	currentCategory,
}: {
	currentPage: number;
	totalPages: number;
	currentCategory?: string;
}) {
	const pathname = usePathname();

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams();
		if (currentCategory) params.set('category', currentCategory);
		params.set('page', pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	const getVisiblePages = () => {
		const visiblePages = [];
		const maxVisible = 5;
		let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
		const end = Math.min(totalPages, start + maxVisible - 1);

		if (end - start + 1 < maxVisible) {
			start = Math.max(1, end - maxVisible + 1);
		}

		for (let i = start; i <= end; i++) {
			visiblePages.push(i);
		}
		return visiblePages;
	};

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href={createPageURL(currentPage - 1)}
						aria-disabled={currentPage <= 1}
						className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
					/>
				</PaginationItem>

				{getVisiblePages().map((page) => (
					<PaginationItem key={page}>
						<PaginationLink
							href={createPageURL(page)}
							isActive={page === currentPage}
						>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}

				<PaginationItem>
					<PaginationNext
						href={createPageURL(currentPage + 1)}
						aria-disabled={currentPage >= totalPages}
						className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
