/*
Copyright 2024 API Testing Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { post } from '../axios'
import type { GenerateRequest } from '../common'
import { getToken } from '../../utils/auth/token'
import { Cache } from '../../utils/cache'

const stroeName = Cache.GetCurrentStore().name

export const GenerateCode = (params: GenerateRequest) =>
  post('/api/server.Runner/GenerateCode', params, {
    'X-Store-Name': stroeName,
    'X-Auth': getToken()
  })

export const ListCodeGenerator = () =>
  post('/api/server.Runner/ListCodeGenerator', null, {
    'X-Auth': getToken()
  })