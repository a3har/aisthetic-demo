import React from 'react'
import {
  FetchQueryOptions,
  QueryKey,
  RefetchQueryFilters,
  useQueryClient,
} from '@tanstack/react-query'
import { _get } from '@/utils/lodash'

export default function useQueryUtils() {
  const queryClient = useQueryClient()

  function data(query: QueryKey) {
    return _get(query, 'data.data')
  }

  function cachedData(queryKey: QueryKey) {
    return queryClient.getQueryData(queryKey)
  }

  function pages(query: QueryKey) {
    return _get(query, 'data.pages', [])
  }

  function update(
    query: QueryKey,
    updater: Function | any,
    config: Object = {}
  ) {
    if (typeof updater === 'function') {
      const newUpdater = (old: any) => ({
        ...old,
        data: updater(old.data),
      })
      return queryClient.setQueryData(query, newUpdater, config)
    } else {
      return queryClient.setQueryData(query, updater, config)
    }
  }

  function refetch(
    query: RefetchQueryFilters,
    config: Object = { exact: true }
  ) {
    return queryClient.refetchQueries(query, config)
  }

  function fetch(args: FetchQueryOptions) {
    return queryClient.fetchQuery(args)
  }

  function remove(...args: any) {
    return queryClient.removeQueries(...args)
  }

  function invalidate(...args: any) {
    return queryClient.invalidateQueries(...args)
  }

  function clear() {
    return queryClient.clear()
  }

  return {
    data,
    cachedData,
    pages,
    update,
    refetch,
    fetch,
    remove,
    invalidate,
    clear,
  }
}
