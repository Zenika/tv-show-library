export default {
  favorites: [],

  /**
     * Add a tvShow to favorites
     */
  addFavorite(tvShow) {
    this.favorites.push(tvShow);
  },

  /**
     * Remove a tvShow from favorites
     */
  removeFavorite(tvShow) {
    const favIndex = this.favorites.findIndex(item => item.id === tvShow.id);
    this.favorites.splice(favIndex, 1);
  },

  /**
     * Check if the tvShow is part of favorites
     */
  isFavorite(tvShow) {
    return this.favorites.find(item => item.id === tvShow.id);
  },
};

