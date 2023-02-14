import { Link, useParams } from '@redwoodjs/router'

type QueryParams = Record<string | number, string | number | boolean>

const POSTS_PER_PAGE = 25
const OFFSET = 3

interface PaginationProps {
  count: number
  page: number
  route: (params: QueryParams) => string
}

function clamp(value: number, total: number): number {
  return Math.max(Math.min(value, total), 1)
}

const Pagination = ({ count, page: currentPage, route }: PaginationProps) => {
  const items = new Set<number>()
  const params = useParams()
  const total = Math.ceil(count / POSTS_PER_PAGE)
  if (currentPage < OFFSET || currentPage > total - OFFSET * 2) {
    for (let i = 0; i < OFFSET; i++) {
      items.add(clamp(i + 1, total))
    }
  } else {
    for (let i = currentPage - OFFSET; i < currentPage + OFFSET; i++) {
      items.add(clamp(i + 1, total))
    }
  }

  if (total > OFFSET * 2) {
    // ellipse
    items.add(-1)
  }

  if (currentPage > total - OFFSET * 2 && currentPage < total) {
    for (
      let i = currentPage - OFFSET;
      i < currentPage + OFFSET && i < total;
      i++
    ) {
      items.add(clamp(i + 1, total))
    }
  } else {
    for (let i = total - OFFSET; i < total; i++) {
      items.add(clamp(i + 1, total))
    }
  }

  const links = Array.from(items).map((i) =>
    i > 0 ? (
      <Link
        key={i}
        to={route({ ...params, page: i })}
        aria-current="page"
        className={
          i == currentPage
            ? 'z-10 bg-primary-400 text-black relative inline-flex items-center px-4 p-2 text-sm font-medium rounded-md'
            : 'bg-gray-100 text-black hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md'
        }
      >
        {i}
      </Link>
    ) : (
      <span
        key="ellipse"
        className="relative inline-flex items-center px-4 py-2 bg-white text-sm font-medium text-gray-700"
      >
        ...
      </span>
    )
  )

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
      {count > POSTS_PER_PAGE && (
        <div className="flex-1 flex justify-between sm:hidden">
          <Link
            to={route({ ...params, page: Math.max(1, currentPage - 1) })}
            className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Anterior
          </Link>
          <Link
            to={route({ ...params, page: Math.min(total, currentPage + 1) })}
            className="ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Siguiente
          </Link>
        </div>
      )}
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
        <p className="text-sm text-gray-700">
          <span className="font-medium">
            {' '}
            {(currentPage - 1) * POSTS_PER_PAGE}
          </span>
          -
          <span className="font-medium">
            {Math.min(count, currentPage * POSTS_PER_PAGE)}{' '}
          </span>
          de
          <span className="font-medium"> {count} </span>
          resultados
        </p>
        {count > POSTS_PER_PAGE && (
          <nav
            className="relative z-0 inline-flex rounded-md -space-x-px gap-1"
            aria-label="Pagination"
          >
            <Link
              to={route({ ...params, page: Math.max(1, currentPage - 1) })}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            {links}

            <Link
              to={route({
                ...params,
                page: Math.min(total, currentPage + 1),
              })}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Siguiente</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Pagination
