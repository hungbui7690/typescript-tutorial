/*
  Generics - Default Value
  - it will show some errors >> but don't worry 
    >> we just use axios as an example 
*/

// data is located in the data property
// .get() is the generic >> check the class below
// const { data } = axios.get(someUrl)

// axios.get<{ name: string }[]>(someUrl)

// // *** this is from the type def of axios
// export class Axios {
//   get<T = any, R = AxiosResponse<T>, D = any>(
//     url: string,
//     config?: AxiosRequestConfig<D>
//   ): Promise<R>
// }

// AxiosResponse is also generic >> check class above
// export interface AxiosResponse<T = any, D = any> {
//   data: T
//   status: number
//   statusText: string
//   headers: RawAxiosResponseHeaders | AxiosResponseHeaders
//   config: InternalAxiosRequestConfig<D>
//   request?: any
// }
