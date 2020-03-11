<?php

namespace App\Security;

use App\Entity\User as AppUser;
use Symfony\Component\Security\Core\Exception\DisabledException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserChecker implements UserCheckerInterface
{
    public function checkPreAuth(UserInterface $user) {

        if (!$user instanceof AppUser) {
            return;
        }

        if ($user->isDelete())  {
            throw new DisabledException("Профилът е деактивиран.");
        }
    }

    public function checkPostAuth(UserInterface $user) {
        return;
    }
}