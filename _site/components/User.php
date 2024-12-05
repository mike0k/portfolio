<?php

namespace site\components;

use site\models\DbContact;
use yii;

/**
 * User
 */
class User extends \common\components\User {

    /**
     * @return \common\components\User|null
     */
    public function getDbUser () {
        if (empty($this->_dbUser) && !$this->isGuest) {
            $user = DbContact::find()->where(['id' => $this->id])->one();
            if (!empty($user)) {
                $this->_dbUser = $user;
            }
        }

        return $this->_dbUser;
    }

}