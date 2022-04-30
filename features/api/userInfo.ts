import { ICreatRequestOnCargos } from '@/types/cargoRide';
import {
  GetUserForProfile,
  GetDeriverDetail,
  GetCargoOwnerDetail,
  GetUsersByRole,
  UpdateUser,
  CreateUser,
  SearchOnDeriver,
  CreateDriver,
  CreateCargoOwner,
  EditCargoOwner,
  EditDriver
} from '@/types/Urls';
import {
  ICargoOwnerCreateApi,
  ICargoOwnerDetails,
  ICargoOwnerUpdateApi,
  ICargoUserCreate,
  IDriverCreateApi,
  IDriverDetails,
  IDriverUpdateApi,
  IGetUserForProfile,
  ISearchOnDriversResp,
  IUserUpdate,
  usersByRole
} from '@/types/User';
import { emptySplitApi } from './apiSlice';

export const getUserInfo = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUserForProfile: build.query<IGetUserForProfile, void>({
      query: () => GetUserForProfile,
      providesTags: ['UserProfile'],
      keepUnusedDataFor: 86400
    }),
    getDeriverDetail: build.query<IDriverDetails, string | string[]>({
      query: (id) => `${GetDeriverDetail}/${id}`
    }),
    getCargoOwnerDetail: build.query<ICargoOwnerDetails, string | string[]>({
      query: (id) => `${GetCargoOwnerDetail}/${id}`,
      providesTags: ['User']
    }),
    getUsersByRole: build.query<usersByRole, string>({
      query: (role) => `${GetUsersByRole}${role}`
    }),

    editUserForProfile: build.mutation<ICreatRequestOnCargos, IUserUpdate>({
      query(values) {
        return {
          url: UpdateUser,
          method: 'put',
          body: values
        };
      },
      invalidatesTags: ['UserProfile']
    }),

    editCargoOwner: build.mutation<ICreatRequestOnCargos, ICargoOwnerUpdateApi>(
      {
        query(values) {
          return {
            url: EditCargoOwner,
            method: 'put',
            body: values
          };
        },
        invalidatesTags: ['User']
      }
    ),
    editDriver: build.mutation<ICreatRequestOnCargos, IDriverUpdateApi>({
      query(values) {
        return {
          url: EditDriver,
          method: 'put',
          body: values
        };
      }
      // invalidatesTags: ["User"],
    }),

    CreateUser: build.mutation<ICreatRequestOnCargos, ICargoUserCreate>({
      query(values) {
        return {
          url: CreateUser,
          method: 'post',
          body: values
        };
      },
      invalidatesTags: ['UserProfile']
    }),

    createCargoOwner: build.mutation<
      ICreatRequestOnCargos,
      ICargoOwnerCreateApi
    >({
      query(values) {
        return {
          url: CreateCargoOwner,
          method: 'post',
          body: values
        };
      },
      invalidatesTags: ['UserProfile']
    }),
    createDriver: build.mutation<ICreatRequestOnCargos, IDriverCreateApi>({
      query(values) {
        return {
          url: CreateDriver,
          method: 'post',
          body: values
        };
      },
      invalidatesTags: ['UserProfile']
    }),

    searchOnDeriver: build.query<ISearchOnDriversResp, string>({
      query: (role) => `${SearchOnDeriver}${role}`
    })
  }),

  overrideExisting: false
});

export const {
  useGetUserForProfileQuery,
  useEditUserForProfileMutation,
  useEditCargoOwnerMutation,
  useEditDriverMutation,
  useSearchOnDeriverQuery,
  useCreateUserMutation,
  useCreateCargoOwnerMutation,
  useCreateDriverMutation,
  useGetUsersByRoleQuery,
  useGetDeriverDetailQuery,
  useGetCargoOwnerDetailQuery
} = getUserInfo;
