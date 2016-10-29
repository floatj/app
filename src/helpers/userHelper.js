export function avatarURL(user, size = 'medium') {
  const ext = size === 'big' ? 'jpg' : 'gif';

  if (!user) {
    return `http://www.plurk.com/static/default_${size}.${ext}`;
  }

  const { has_profile_image, avatar, id } = user;
  if (has_profile_image == 1 && !avatar) {
    return `http://avatars.plurk.com/${id}-${size}.${ext}`;
  } else if (has_profile_image == 1 && avatar) {
    return `http://avatars.plurk.com/${id}-${size}${avatar}.${ext}`;
  } else {
    return `http://www.plurk.com/static/default_${size}.${ext}`;
  }
}
