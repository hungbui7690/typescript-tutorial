/*
  Extract Examples


*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Example 3
type Routes =
  | {
      route: '/user'
      search: {
        id: string
      }
    }
  | {
      route: '/user/create'
    }
  | {
      route: '/user/edit'
      search: {
        id: string
      }
    }

type RoutesWithSearch = Extract<
  Routes,
  {
    search: any
  }
>
/* 
{
    route: '/user';
    search: {
        id: string;
    };
} | {
    route: '/user/edit';
    search: {
        id: string;
    };
}
*/

// To get the members of union you don't need to always include the discriminator (in this case, route) in the second argument. You can just pass the shape of the members you want to get.
// In this case, we want to extract the types from the Routes union type that have a search property.
