exports.NovelSql = {
    queryAll: 'select * from novel',
    queryNovelType: 'select distinct(type) from novel',
    queryByType: 'select * from novel where type = ? order by last_update DESC'
};