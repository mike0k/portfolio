<?php

namespace site\components;

use common\models\DbContact;
use site\models\DbUser;

class UserIdentity extends \common\models\DbUser implements \yii\web\IdentityInterface {

    /**
     * @inheritdoc
     */
    public static function findIdentity ($id) {
        return static::findOne($id);
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken ($token, $type = null) {
        //return static::findOne(['salt' => $token]);
        throw new NotSupportedException('"findIdentityByAccessToken" is not implemented.');
    }

    /**
     * @inheritdoc
     */
    public function getId () {
        return $this->getPrimaryKey();
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey () {
        return $this->salt;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey ($authKey) {
        return $this->salt === $authKey;
    }

}
