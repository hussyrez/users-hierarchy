export class UserRepository {
    roles = [];

    // constructor(roles) {
    //     this.roles = roles;
    // }

    // getAll() {
    //     return this.roles;
    // }

    // setUsers(users) {

    //     users.forEach((item) => {
    //         if (!this.users) {
    //             this.users = [];
    //         }

    //         if (!this.roles!.find((role) => role.Id === item.Role)) {
    //             L.error(`Role ${item.Role} does not exist`);
    //             throw new RoleNotFoundException();
    //         }

    //         this.users.push(item);
    //     });
    // };

    // removeUsers(){
    //     this.users = []
    // };

    // update();

    //     /**
    //  * @param AdaptorInterface $adaptor
    //  * @param int $userId
    //  * @return ArrayDecorator
    //  */
    //      public function getSubOrdinates(AdaptorInterface $adaptor, int $userId): ArrayDecorator
    //      {
    //          $userRoleId = $this->get($userId)['Role'];
     
    //          $subordinateRoleIds = $adaptor
    //              ->buildTree($userRoleId)
    //              ->getAllDescendantsIds();
     
    //          $subordinateUsers = array_filter($this->getAll(), function ($user) use ($subordinateRoleIds) {
    //              return in_array($user['Role'], $subordinateRoleIds);
    //          });
     
    //          return new ArrayDecorator($subordinateUsers);
    //      }
}